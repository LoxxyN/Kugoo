import type { CheckboxOptionType } from 'antd';
import { Checkbox } from "antd";
import { memo, useCallback } from "react";

export const FilterGroup = memo(({ title, options, value, onChange }: {title: string, options: CheckboxOptionType<string>[], value: string[], onChange: (value: string[]) => void}) => {
    const handleChange = useCallback((checkedValue: string[]) => {
        onChange?.(checkedValue)
    }, [onChange])

    return (
        <div>
            <h2 className='filter-group__title'>{title}</h2>
            <Checkbox.Group value={value} onChange={handleChange} options={options} />
        </div>
    )
})