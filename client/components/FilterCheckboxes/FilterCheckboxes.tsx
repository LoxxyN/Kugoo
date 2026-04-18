import { FilterGroup } from "@components/index";
import { useCallback, useState } from "react";
import type { CheckboxOptionType } from 'antd';


const filterOptionsType: CheckboxOptionType<string>[] = [
    { label: 'Внедорожный', value: 'offroad' },
    { label: 'Городской', value: 'city' },
    { label: 'Зимний', value: 'winter' }
];

const filterOptionsAge: CheckboxOptionType<string>[] = [
    { label: 'Для взрослого', value: 'adult' },
    { label: 'Для ребенка', value: 'child' },
    { label: 'Для пенсионера', value: 'pensioner' }
];

const filterOptionsWeight: CheckboxOptionType<string>[] = [
    { label: 'Легкие (до 15 кг)', value: 'light' },
    { label: 'Средние (15-30 кг)', value: 'medium' },
    { label: 'Тяжелые (свыше 30 кг)', value: 'heavy' }
];

export const FilterCheckboxes = () => {
    const [typeValue, setTypeValue] = useState<string[]>([])
    const [ageValue, setAgeValue] = useState<string[]>([])
    const [weightValue, setWeightValue] = useState<string[]>([])

    const handleTypeChange = useCallback((values: string[]) => {
        setTypeValue(values)
    }, [])

    const handleAgeChange = useCallback((values: string[]) => {
        setAgeValue(values)
    }, [])

    const handleWeightChange = useCallback((values: string[]) => {
        setWeightValue(values)
    }, [])

    return (
        <>
            <FilterGroup onChange={handleTypeChange} value={typeValue} title='Тип' options={filterOptionsType} />
            <FilterGroup onChange={handleAgeChange} value={ageValue} title='Для кого' options={filterOptionsAge} />
            <FilterGroup onChange={handleWeightChange} value={weightValue} title='Вес' options={filterOptionsWeight} />
        </>
    )
}