/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import "./MovieRow.css";

import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

export default ({ title, items }) => {
    const [scrollX, setScroollX] = useState(0);

    const handleLeftArrows = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScroollX(x);
    };
    const handleRightArrows = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if (window.innerWidth - listW > x) {
            x = window.innerWidth - listW - 60;
        }
        setScroollX(x);
    };

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrows}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>
            <div className="movieRow--right" onClick={handleRightArrows}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>
            <div className="movieRow--listarea">
                <div
                    className="movieRow--list"
                    style={{
                        marginLeft: scrollX,
                        width: items.results.length * 150,
                    }}
                >
                    {items.results.length > 0 &&
                        items.results.map((item, key) => (
                            <div className="movieRow--item" key={key}>
                                <img
                                    key={key}
                                    alt={item.original_title}
                                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};
