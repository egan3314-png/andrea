interface MetricCardProps {
  value: string
  label: string
}

export function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#F8FAFC] to-[#EDF2F7] rounded-xl border border-[#E5E7EB]">
      <span className="text-2xl md:text-3xl font-bold text-[#1E2A38] mb-1">
        {value}
      </span>
      <span className="text-sm text-muted-foreground text-center">
        {label}
      </span>
    </div>
  )
}
