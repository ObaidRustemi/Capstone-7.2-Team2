import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import ArtworkListItem from "./ArtworkListItem";

const API = apiURL();

const ArtworkList = ({}) => {
    const [artwork, setArtwork] = useState([]);

    useEffect(() => {
        const fetchArtwork = async () => {
            try {
                const res = await axios.get(`${API}/artwork`);
                setArtwork(res.data);
            } catch (error) {
                return error;
            }
        };
        fetchArtwork();
    }, []);

    return (
        <div className="artwork-index">
            <ul>
                {artwork.map((artwork) => {
                    return (
                        <ArtworkListItem 
                        key={artwork.id}
                        artwork={artwork}
                        />

                    );
                })}
            </ul>
        </div>
    );
};

export default ArtworkList;