import React from 'react'

import Select from 'react-select'
import { getdropDownMenu } from '../api'

function dropDownMenuForm({ onSelect }) {
  const [options, setOptions] = React.useState([])

  const handleSelect = React.useCallback((value) => {
    onSelect(value)
  }, [])

  React.useEffect(() => {
    getdropDownMenu()
      .then((categories) => {
        const Jurisdiction = []
        const topic = []
        const groups = [
          { label: 'Jurisdiction', options: Jurisdiction },
          // { label: 'Topic', options: topic },
        ]

        categories
          .sort((a, b) => a.category_name.localeCompare(b.category_name))
          .forEach((category) => {
            let options =
              category.type === 'Jurisdiction' ? Jurisdiction : topic

            options.push({
              label: category.category_name,
              value: category.id,
              type: category.type,
            })
          })

        setOptions(groups)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <Select
      closeMenuOnSelect={false}
      onChange={handleSelect}
      isMulti
      options={options}
      placeholder='search keywords...'
    />
  )
}

export default dropDownMenuForm
