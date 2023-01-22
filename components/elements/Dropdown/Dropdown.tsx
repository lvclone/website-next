import { Card } from '@components/layout';
import { useSearchState } from 'context/SearchProvider';
import { FC, useEffect, useState } from 'react';
import styles from './Dropdown.module.css';

interface DropdownProps {
    changeSort: (searchState: any) => void;
}

const Dropdown: FC<DropdownProps> = ({ changeSort }) => {
    const [state, setState] = useState('initial');
    const { search } = useSearchState();

    useEffect(() => {
        const sortValue = search.sorting;
        if (sortValue) {
            setState(sortValue);
        }
    }, [search.sorting]);

    return (
        <Card className={styles.selectWrapper}>
            <label className={styles.label} htmlFor="sort-select">
                Sort by:{' '}
            </label>
            <select
                className={styles.select}
                onChange={changeSort}
                value={state}
                id="sort-select">
                <optgroup label="Votes">
                    <option value="votes_desc">Votes Desc</option>
                    <option value="votes_asc">Votes Asc</option>
                </optgroup>
                <optgroup label="Alphabetical">
                    <option value="alphabetical_asc">Alphabetical Asc</option>
                    <option value="alphabetical_desc">Alphabetical Desc</option>
                </optgroup>
            </select>
        </Card>
    );
};

export default Dropdown;
