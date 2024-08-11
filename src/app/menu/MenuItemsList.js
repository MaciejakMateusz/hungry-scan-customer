import React from "react";

export const MenuItemsList = () => {


    return (
        <div className={'menu-items-wrapper'}>
            <div className={'menu-item-container'}>
                <div className={'menu-item-grid'}>
                    <div className={'menu-item-image-container'}>
                        <img className={'menu-item-image'} src={'theme/images/pizza-margherita.jpg'}
                             alt={'pizza-margherita'}/>
                    </div>
                    <div className={'menu-item-text-data-grid'}>
                        <div className={'menu-item-name'}>Margherita</div>
                        <div className={'menu-item-description'}>sos pomidorowy, mozzarella, zioła</div>
                        <div className={'menu-item-price'}>25,00 zł</div>
                    </div>
                </div>
            </div>
            <div className={'menu-item-container'}>
                <div className={'menu-item-grid no-photo'}>
                    <div className={'menu-item-text-data-grid'}>
                        <div className={'menu-item-name'}>Kompozycja własna</div>
                        <div className={'menu-item-description'}>sos pomidorowy, mozzarella, zioła i dodatkowo wybrane
                            składniki
                        </div>
                        <div className={'menu-item-price'}>25,00 zł</div>
                    </div>
                </div>
            </div>
            <div className={'menu-item-container'}>
                <div className={'menu-item-grid'}>
                    <div className={'menu-item-image-container'}>
                        <span className={'menu-item-banner'}>BESTSELLER</span>
                        <img className={'menu-item-image'} src={'theme/images/pizza-pollo.jpg'} alt={'pizza-pollo'}/>
                    </div>
                    <div className={'menu-item-text-data-grid'}>
                        <div className={'menu-item-name'}>Pollo</div>
                        <div className={'menu-item-description'}>sos pomidorowy, mozzarella, kurczak w sosie
                            słodko-pikantnym
                        </div>
                        <div className={'menu-item-price'}>25,00 zł</div>
                    </div>
                </div>
            </div>
            <div className={'menu-item-container'}>
                <div className={'menu-item-grid'}>
                    <div className={'menu-item-image-container'}>
                        <img className={'menu-item-image'} src={'theme/images/pizza-tuna.png'} alt={'pizza-tuna'}/>
                    </div>
                    <div className={'menu-item-text-data-grid'}>
                        <div className={'menu-item-name'}>Tuna</div>
                        <div className={'menu-item-description'}>sos pomidorowy, mozzarella, zioła, tuńczyk, cebula,
                            ogórek konserwowy
                        </div>
                        <div className={'menu-item-price'}>25,00 zł</div>
                    </div>
                </div>
            </div>
            <div className={'menu-item-container'}>
                <div className={'menu-item-grid'}>
                    <div className={'menu-item-image-container'}>
                        <img className={'menu-item-image'} src={'theme/images/pizza-chefa.jpg'} alt={'pizza-chefa'}/>
                    </div>
                    <div className={'menu-item-text-data-grid'}>
                        <div className={'menu-item-name'}>Chefa</div>
                        <div className={'menu-item-description'}>sos pomidorowy, mozzarella, kukurydza, papryka,
                            szynka
                        </div>
                        <div className={'menu-item-price'}>25,00 zł</div>
                    </div>
                </div>
            </div>
        </div>
    );
}