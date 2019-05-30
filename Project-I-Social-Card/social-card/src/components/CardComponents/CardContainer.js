import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer() {
    return (
        <div className='MainCardContainer'>
            <section className='CardContainer'><CardBanner />

                <section><CardContent />
                </section>
            </section>
        </div>

            )

        }
export default CardContainer;