import React from 'react'
import ItemCard from '../../Components/ItemCard/ItemCard'
import './Product.scss'
import AlsoCard from './AlsoCard/AlsoCard';


function Product() {
    return (
        <div className='product'>
            <div className='product-container'>
                <div className='product-header'>
                    <div className='product-header-row'>
                        <div className='product-image-section'>
                            <img className='product-image' src="assets/img/product/product-1.jpg" alt="Product image" />
                        </div>
                        <div className='product-header-description'>
                            <p className='product-header-title'>Исключительное качество без компромиссов</p>
                            <p className='product-header-text'>Ножи «Tuotown» — это главный инструмент поваров и секрет кулинарного мастерства</p>
                        </div>
                    </div>
                    <div className='product-header-row reverse'>
                        <div className='product-image-section'>
                            <img className='product-image' src="assets/img/product/product-2.jpg" alt="Product image" />
                        </div>
                        <div className='product-header-description'>
                            <p className='product-header-title'>Исключительное качество без компромиссов</p>
                            <p className='product-header-text'>Ножи «Tuotown» — это главный инструмент поваров и секрет кулинарного мастерства</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='chars'>
                <div className='chars-wrap'>
                    <div className='chars-image-wrap'>
                        <img src="assets/img/product/knife-schema.jpg" alt="knife schema image" />

                    </div>
                    <div className='chars-description'>
                        <div className='chars-title'>
                            <h3>Характеристики</h3>
                            <div className='redline'></div>
                        </div>

                        <ul className='chars-list'>
                            <li>Длина лезвия <span>24см</span></li>
                            <li>Длина лезвия <span>24см</span></li>
                            <li>Длина лезвия <span>24см</span></li>
                            <li>Длина лезвия <span>24см</span></li>
                        </ul>

                        <div className='more-chars'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4979 4.5C12.4979 4.22386 12.274 4 11.9979 4C11.7218 4 11.4979 4.22386 11.4979 4.5V11.4979H4.5C4.22386 11.4979 4 11.7218 4 11.9979C4 12.2741 4.22386 12.4979 4.5 12.4979H11.4979V19.4958C11.4979 19.772 11.7218 19.9958 11.9979 19.9958C12.274 19.9958 12.4979 19.772 12.4979 19.4958V12.4979H19.4958C19.772 12.4979 19.9958 12.2741 19.9958 11.9979C19.9958 11.7218 19.772 11.4979 19.4958 11.4979H12.4979V4.5Z" fill="white" />
                            </svg>
                            <span>Больше характеристик</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='also'>
                <div className='also-container'>
                    <h3 className='also-title'>Аксессуары</h3>
                    <div className='also-row'>
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                    </div>

                    <h3 className='also-title'>Смотрите также</h3>
                    <div className='also-row'>
                        <AlsoCard />
                        <AlsoCard />
                        <AlsoCard />
                        <AlsoCard />
                    </div>

                    <div className='email-section'>
                        <h3>Узнавайте первым о новинках и новостях</h3>
                        <div className="input-block">
                            <input id="email" placeholder='Ваш e-mail' type="email" />
                            <svg className='email-section-img' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9569 7.13921L17.8661 10.1639C18.0446 10.3495 18.0446 10.6505 17.8661 10.8361L14.9569 13.8608C14.7783 14.0464 14.4889 14.0464 14.3104 13.8608C14.1318 13.6752 14.1318 13.3742 14.3104 13.1886L16.4392 10.9753H2V10.0247H16.4392L14.3104 7.81137C14.1318 7.62576 14.1318 7.32482 14.3104 7.13921C14.4889 6.9536 14.7783 6.9536 14.9569 7.13921Z" fill="white" />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Product