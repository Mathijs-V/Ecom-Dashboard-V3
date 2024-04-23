import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { SalesDataResponse, InvoiceRequest, ChartData } from './types';

const initialChartData: ChartData = {
  labels: [],
  datasets: [
    {
      label: 'Daily Revenue',
      data: [],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }
  ]
};

const SalesGraph = () => {
  const [chartData, setChartData] = useState<ChartData>(initialChartData);

  const fetchData = async () => {
    try {
      const { data } = await axios.get<SalesDataResponse>('/api/getSalesData');
      const processedData = processSalesData(data.invoiceRequests);
      setChartData(processedData);
    } catch (error) {
      console.error('Failed to fetch sales data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Total Revenue Per Day</h2>
      <Line data={chartData} />
    </div>
  );
};

const processSalesData = (invoiceRequests: InvoiceRequest[]): ChartData => {
  const salesData = invoiceRequests.reduce((acc, request) => {
    const date = new Date(request.statusTransitions.find(st => st.status === 'FINISHED')?.statusDateTime ?? '').toLocaleDateString();
    acc[date] = acc[date] || 0;
    acc[date] += request.products.reduce((total, product) => total + product.quantity * product.unitPrice, 0);
    return acc;
  }, {} as Record<string, number>);

  const labels = Object.keys(salesData);
  const data = Object.values(salesData);

  return {
    labels: labels,
    datasets: [{
      label: 'Daily Revenue',
      data: data,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };
};

export default SalesGraph;
export const config = { runtime: 'client' };