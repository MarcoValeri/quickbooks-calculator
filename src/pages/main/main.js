import React, { useState } from 'react';

// Import components
import ShareBtn from '../../components/share-btns/share-btns';
import Question from '../../components/questions/question';

// Import main.scss
import './main.scss';

const Main = () => {

    // Set states
    const [incomes, setIncomes] = useState({
        sale: 0,
        commission: 0,
        construction: 0,
        otherIncome: 0
    });

    // Events
    const inputHandleChange = e => {
  
        const value = parseFloat(e.target.value);
    
        setIncomes({
          ...incomes,
          [e.target.name]: value
        });
    
    }

    return (
        <main>
            <section id="main-gridcontainer">
                <section className="main-title">
                    <h1>The QuickBooks Calculator</h1>
                </section>
                <section className="main-input main-input-sales">
                    <label htmlFor="sale">Income from sales</label>
                    <input onChange={inputHandleChange} id="sale" name="sale" type="number" value={incomes.sales} placeholder="£0" />
                </section>
                <section className="main-input main-input-commissions">
                    <label htmlFor="commission">Commissions</label>
                    <input onChange={inputHandleChange} id="commission" name="commission" type="number" value={incomes.sales} placeholder="£0" />
                </section>
                <section className="main-input main-input-construction">
                    <label htmlFor="construction">Construction</label>
                    <input onChange={inputHandleChange} id="construction" name="construction" type="number" value={incomes.sales} placeholder="£0" />
                </section>
                <section className="main-input main-input-otherincome">
                    <label htmlFor="otherIncome">Other income</label>
                    <input onChange={inputHandleChange} id="otherIncome" name="otherIncome" type="number" value={incomes.sales} placeholder="£0" />
                </section>
                <section className="main-total">
                    <strong>Total</strong>
                    <section className="main-total-banner">
                        <h2>£{incomes.sale + incomes.commission + incomes.construction + incomes.otherIncome}</h2>
                    </section>
                </section>
                <section className="main-social">
                    <p>Share my results</p>
                    <ShareBtn />
                </section>
            </section>
            <section className="main-question">
                <h2>Frequently asked questions</h2>
                <Question request="Present fermentum posuere varius" />
                <Question request="Integer semper efficitur lacus, nec semper lectus tempus id?" />
                <Question request="Sed erat dolor, pellentesque eu pulvinar eget, finibus at arcu?" />
                <Question request="Praesent sollicitudin mauris a mattis tincidunt?" />
                <hr />
            </section>
        </main>
    )

};

export default Main;