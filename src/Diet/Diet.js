import React from 'react'
import './Diet.css'
import img2 from'./img2.png'

function Diet() {
  return (
    <>
    <div style={{backgroundColor:'greenyellow'}}>
    <div className='contain'>
        <h1>You need to Follow these Diet in Your Day to Day Life</h1>
        <img src={img2} className='image' alt='img2' />
    </div>
    <div style={{padding:"20px"}}>
        <h3>Nutrition needs when you’re over 65</h3>
        <ul>
            <li>Eat a wide variety of foods from the five food groups: plenty of colourful vegetables, legumes/beans; fruit; grain (cereal) foods, mostly wholegrain and high fibre varieties; lean meats and poultry, fish, eggs, tofu, nuts and seeds; milk, yoghurt, cheese or their alternatives, mostly reduced fat</li>
            <li>Drink plenty of water – six to eight cups of fluid per day.</li>
            <li>Limit foods high in saturated fat, such as biscuits, cakes, pastries, pies, processed meats, commercial burgers, pizza, fried foods, potato chips, crisps and other savoury snacks.</li>
            <li>Replace high fat foods containing mostly saturated fat with foods containing mostly polyunsaturated and monounsaturated fats. Swap butter, cream, cooking margarine, coconut and palm oil with unsaturated fats from oils, spreads, nut butters and pastes, and avocado.</li>
            <li>Limit alcohol. (Drink no more than two standard drinks a day.)</li>
            <li>Keep ‘extras’ or ‘sometimes foods’ to a minimum – they’re not a regular part of a healthy diet. Extras are the high sugar, high fat, high salt foods listed above, such as commercial burgers, pizza, alcohol, lollies, cakes and biscuits, fried foods, and fruit juices and cordials.</li>
            <li>Be physically active. (Aim for at least 30 minutes of moderate intensity physical activity, such as walking, every day.)</li>
        </ul>
        </div>
    <div className='contain'>
        <h1>In your Daily plate</h1>
        {/* style={{display:'flex',flexDirection:'row',margin:"20px"}} */}
        <div className='new row' >
            <div className='card new col-lg-4 col-sm-12'>
                <h1>BreakFast</h1>
                <p>add yoghurt and milk to cereal; or try egg, sardines, leftover meat or cheese on toast</p>
            </div>
            <div className='new card col-sm-12'>
                <h1>Lunch</h1>
                <p>have some cheese or ham; make an open sandwich of tinned tuna or sardines; have a glass of milk or a banana smoothie</p>
            </div>
            <div className='new card col-sm-12'>
                <h1>Dinner</h1>
                <p>serve meat, chicken, fish or eggs with vegetables like broccoli or cauliflower with melted cheese; enjoy ice-cream, yoghurt or custard with fruit for dessert.</p>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Diet