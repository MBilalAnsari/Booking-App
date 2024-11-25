import React, { Children, useState } from 'react';
import "./header.css" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Calendar } from 'react-date-range';

const Header = ({ type }) => {
    const [openCalendar, setOpenCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleSelect = (date) => {
        setSelectedDate(date);
        setOpenCalendar(false);
    };
    const [options, setOptions] = useState({
        adult: 1,
        Children: 0,
        room: 1,
    })
    const [openOpt, setOpenOpt] = useState(false)

    const clickHandler = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };
    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listmode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListitem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListitem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListitem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rental</span>
                    </div>
                    <div className="headerListitem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListitem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxis</span>
                    </div>
                </div>
                {type !== "list" &&
                    <>
                        <h1 className="headerTitle">A Lifetime of Discount? It's Genius.</h1>
                        <p className="headerDesc">
                            Get rewarded for your travels – unlock instant savings of 10% or more with a free Lamabooking account
                        </p>
                        <button className="headerBtn">Sign in / Register</button>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                                <input
                                    type="text"
                                    placeholder="Where are you going?"
                                    className="headerSearchInp"
                                />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                                <span className="headerSearchText" onClick={() => setOpenCalendar(!openCalendar)}>{selectedDate.toDateString()}</span>
                                {openCalendar && (
                                    <div className="calendarPopup">
                                        <Calendar date={selectedDate} onChange={handleSelect} />
                                    </div>
                                )}
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                <span className="headerSearchText" onClick={() => setOpenOpt(!openOpt)}>{`${options.adult} Adult , ${options.Children} Children , ${options.room} Room`}</span>
                                {openOpt && <div className="options">
                                    <div className="optionItems">
                                        <span className="optionText">Adult</span>
                                        <div className="optCounter">
                                            <button disabled={options.adult <= 0} className="btnCounterbtn" onClick={() => clickHandler("adult", "d")}>-</button>
                                            <span className="optCountNum">{options.adult}</span>
                                            <button className="btnCounterbtn" onClick={() => clickHandler("adult", "i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItems">
                                        <span className="optionText">Children</span>
                                        <div className="optCounter">
                                            <button disabled={options.adult <= 0} className="btnCounterbtn" onClick={() => clickHandler("Children", "d")}>-</button>
                                            <span className="optCountNum">{options.Children}</span>
                                            <button className="btnCounterbtn" onClick={() => clickHandler("Children", "i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItems">
                                        <span className="optionText">Room</span>
                                        <div className="optCounter">
                                            <button disabled={options.adult <= 0} className="btnCounterbtn" onClick={() => clickHandler("room", "d")}>-</button>
                                            <span className="optCountNum">{options.room}</span>
                                            <button className="btnCounterbtn" onClick={() => clickHandler("room", "i")}>+</button>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                            <div className="headerSearchItem">
                                <button className="headerBtn">Search</button>
                            </div>
                        </div>
                    </>}
            </div>
        </div>
    );
};

export default Header;
