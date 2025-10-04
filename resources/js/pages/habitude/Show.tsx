import { Calendar } from '@/components/ui/calendar';
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Habitudes',
        href: '/habitudes',
    },
];

const chartData = [
    { month: 'January', total: 15 },
    { month: 'February', total: 10 },
    { month: 'March', total: 30 },
    { month: 'April', total: 20 },
    { month: 'May', total: 30 },
    { month: 'June', total: 30 },
];

const chartConfig = {
    total: {
        label: 'Total',
        color: '#2563eb',
    },
} satisfies ChartConfig;

const Show = () => {
    const [date, setDate] = React.useState<Date | undefined>(
        new Date(2025, 5, 12),
    );
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Habitudes" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {/* Titre */}
                <div className="mb-6 flex justify-between">
                    <h1>Lecture</h1>
                </div>

                {/* Graphique */}
                <div className="rounded-xl border bg-card p-4 text-card-foreground shadow">
                    <ChartContainer
                        config={chartConfig}
                        className="h-[60vh] w-full"
                    >
                        <BarChart accessibilityLayer data={chartData}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Bar
                                dataKey="total"
                                fill="var(--color-primary)"
                                radius={4}
                            />
                        </BarChart>
                    </ChartContainer>
                </div>

                <div className="rounded-xl border bg-card p-4 text-card-foreground shadow">
                    <Calendar
                        mode="single"
                        defaultMonth={date}
                        numberOfMonths={4}
                        selected={date}
                        onSelect={setDate}
                        className="rounded-lg border shadow-sm w-full"
                    />
                </div>
            </div>
        </AppLayout>
    );
};

export default Show;
