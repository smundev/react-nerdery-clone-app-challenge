import { useState } from 'react'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css'

export default function DateRangeSelector() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ])

  return (
    <DateRange
      editableDateInputs={true}
      onChange={(item) => setState([item.selection as any])}
      moveRangeOnFirstSelection={false}
      ranges={state as any}
    />
  )
}
