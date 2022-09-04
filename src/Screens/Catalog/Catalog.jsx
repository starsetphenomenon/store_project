/* eslint-disable react-hooks/exhaustive-deps */
import FilterSelect from '../../Components/FilterSelect/FilterSelect';
import ItemCard from '../../Components/ItemCard/ItemCard';
import "./Catalog.scss";
import { React, useContext, useState, useEffect } from 'react'
import { DataContext } from '../../App';


function Catalog({ filter1 }) {

    const filterMaterial = ['Все', 'Сталь', 'Нержавеющая сталь', 'Титан', 'Дерево'];

    let { data, filterLink } = useContext(DataContext);
    const [pageTitle, setPageTitle] = useState('Ножи')
    const [filterData, setFilterData] = useState(data);
    const [filter, setFilter] = useState({
        filter1: 'Ножи',
        filter2: ''
    });
    const [priceRange, setPriceRange] = useState({
        min: 0,
        max: 9999,
    });

    useEffect(() => {
        setFilter({ filter1: filterLink })
    }, [filterLink])

    useEffect(() => {
        setFilterData(data.filter(el => el.type === 'Ножи'))
        getPriceRange(data)
    }, [data]);

    const handleFilter = (e) => { // handle TYPE filters ~~~~~~~~~~     
        if (e.target.getAttribute('value') === 'Все') {
            setFilter({
                ...filter,
                [e.target.getAttribute('name')]: '',
            })
        } else {
            setFilter({
                ...filter,
                [e.target.getAttribute('name')]: e.target.getAttribute('value').toLowerCase(),
            })
        }

    }

    const handleStatus = (e) => { // handle STATUS filter ~~~~~~~~~~
        if (e.target.getAttribute('id') === 'All') {
            setFilter({
                ...filter,
                filterStatus: '',
            })
        } else {
            setFilter({
                ...filter,
                filterStatus: e.target.getAttribute('id').toLowerCase(),
            })
        }
    }

    const handleAllFilters = (filter, db) => { // handle All filters ~~~~~~~~~~
        let result = [];
        let filterIsPassed = [];
        db.filter(el => {
            Object.values(filter).forEach(filter => {
                if (JSON.stringify(el).toLowerCase().includes(filter)) {
                    filterIsPassed.push(1) // filter match
                } else {
                    filterIsPassed.push(0) // filter failed
                }
            })
            if (filterIsPassed.every(el => el === 1)) { // if all filters are match ~~~~~~~~~~~

                result.push(el);
            }
            return filterIsPassed = [];
        })
        result = [...new Set(result)]
        setFilterData(result);
        getPriceRange(result);
    }

    const getPriceRange = (data) => {
        let min = Infinity;
        let max = 0;
        let prices = data.map(el => el.price);
        prices.forEach(el => {
            if (el > max) {
                max = el;
            }
            if (el < min) {
                min = el;
            }
        })
        setPriceRange({
            min: min,
            max: max,
            mainEdge: max,
        })
    }

    useEffect(() => {
        handleAllFilters(filter, data);
        let title = Object.values(filter).filter(el => el !== '');
        setPageTitle(title.join(' / '));
    }, [filter]);

    const handlePrice = (e) => {
        let result = [];
        result = data.filter(el => el.price >= +e.target.min && el.price <= +e.target.value); // Filter by PRICE ~~~~~~~~~
        handleAllFilters(filter, result); // Filter by current FILTERS ~~~~~~~~~
        if (e.target.name === 'price') { // prcieRange from inputs
            setPriceRange({
                ...priceRange,
                [e.target.getAttribute('id')]: +e.target.value
            })
        }
        if (e.target.name === 'priceRange') {  // prcieRange from range
            setPriceRange({
                ...priceRange,
                min: +e.target.min,
                max: +e.target.value,
            })
        }
    }

    const resetFilters = () =>{
        setFilter({});
    }

    return (
        <div className='catalog'>
            <div className="header">
                <div className="bg">
                    <div className="bg-wrapper"></div>
                    <img src="./assets/img/catalog/catalog-header.png" alt="catalog header background" />
                </div>
                <div className="wrapper">
                    <h1>Дом и Ножи</h1>
                    <h3>Эксклюзивные технологии на страже чистоты и уюта в вашем доме</h3>
                </div>
            </div>
            <h2 className='catalog_heading'>Ваш фильтр: <p>{pageTitle}</p></h2>
            <div className="content">
                <div className="filters">
                    <div onClick={resetFilters} className="resetFilter">
                        <h3>Сбросить фильтр</h3>
                        <div className="res">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <FilterSelect name="Что ищем?" handleFilter={handleFilter} filter={filter1} />
                    <FilterSelect name="Материал" handleFilter={handleFilter} filter={filterMaterial} />
                    <div className="status">
                        <h3>Статус</h3>
                        <div>
                            <input type="radio" id="All" name="status" onChange={handleStatus} />
                            <label htmlFor="All">Все</label>
                        </div>
                        <div>
                            <input type="radio" id="New" name="status" onChange={handleStatus} />
                            <label htmlFor="New">Новинки</label>
                        </div>
                        <div>
                            <input type="radio" id="Popular" name="status" onChange={handleStatus} />
                            <label htmlFor="Popular">Популярное</label>
                        </div>
                    </div>
                    <div className="price">
                        <label htmlFor="volume"><h3>Цена</h3></label>
                        <div className="range">
                            <input type="number" name="price" id="min" value={priceRange.min} onChange={handlePrice} />
                            <input type="number" name="price" id="max" value={priceRange.max} onChange={handlePrice} />
                        </div>
                        <input type="range" name="priceRange" onChange={handlePrice}
                            min={priceRange.min} max={priceRange.mainEdge} />
                    </div>
                </div>
                <div className="items">
                    <div className="items__wrapper">
                        {filterData.map(item => {
                            return <ItemCard data={item} key={item.id} className={'item-card-catalog'} status={item.status} />
                        })}
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="knifeTypes">
                    <a href=".">
                        <div className="img-wrapper"></div>
                        <img src="./assets/img/catalog/catalog-footer-type1.png" alt="" />
                        <h5>Ножи с покрытием</h5>
                    </a>
                    <a href=".">
                        <div className="img-wrapper"></div>
                        <img src="./assets/img/catalog/catalog-footer-type2.png" alt="" />
                        <h5>Ножи с покрытием</h5>
                    </a>
                    <a href=".">
                        <div className="img-wrapper"></div>
                        <img src="./assets/img/catalog/catalog-footer-type3.png" alt="" />
                        <h5>Ножи с покрытием</h5>
                    </a>
                    <a href=".">
                        <div className="img-wrapper"></div>
                        <img src="./assets/img/catalog/catalog-footer-type4.png" alt="" />
                        <h5>Ножи с покрытием</h5>
                    </a>
                    <a href=".">
                        <div className="img-wrapper"></div>
                        <img src="./assets/img/catalog/catalog-footer-type5.png" alt="" />
                        <h5>Ножи с покрытием</h5>
                    </a>
                    <a href=".">
                        <div className="img-wrapper"></div>
                        <img src="./assets/img/catalog/catalog-footer-type6.png" alt="" />
                        <h5>Ножи с покрытием</h5>
                    </a>
                    <a href=".">
                        <div className="img-wrapper"></div>
                        <img src="./assets/img/catalog/catalog-footer-type7.png" alt="" />
                        <h5>Ножи с покрытием</h5>
                    </a>
                    <a href=".">
                        <div className="img-wrapper"></div>
                        <img src="./assets/img/catalog/catalog-footer-type8.png" alt="" />
                        <h5>Ножи с покрытием</h5>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Catalog;