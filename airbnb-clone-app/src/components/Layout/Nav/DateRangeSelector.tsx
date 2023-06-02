import { useEffect, useState } from 'react'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css'

export default function DateRangeSelector({
  onDateChange,
}: {
  onDateChange: (date: any) => void
}) {
  const [state, setState] = useState([
    {
      startDate: null,
      endDate: null,
      key: 'selection',
    },
  ])

  useEffect(() => {
    onDateChange(state)
  }, [state])

  return (
    <DateRange
      editableDateInputs={true}
      onChange={(item) => setState([item.selection] as any)}
      moveRangeOnFirstSelection={false}
      ranges={state as any}
    />
  )
}
