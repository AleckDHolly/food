import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer xuFGPIxxOAh7DybRSeEstZtWVYUREiRpfZsWGA7EqZWFW8ozNirHweMfguH-lvxohYptxh-Q32vgDBLKgoKyUj4zRrcNfqoY-lxajn32G1xyDcubMH89ayPLCqqdYnYx"
    }
});
