
import './card.css'


const SpotCard = ({ spotInfo, isShow }) => {
    const { _id, photoUrl, spotName, country, location, description, avgCost, season, travelTime, totalVisitors } = spotInfo
    // console.log(country)
    return (
        <div className="shadow-md border border-gray-200">
            <div className="w-full h-[400px] overflow-hidden" id="container">
                <img className="w-full object-cover h-full image1" src={photoUrl} alt="" />
            </div>
            <div className="space-y-1 px-5 py-5 ">
                <h1 className={isShow ? 'text-2xl font-medium' : 'text-2xl font-medium text-primary-color'}>{spotName}</h1>

                <p className={isShow && 'text-primary-color'}>{location}, <span className="ml-2">{country}</span></p>
                {
                    isShow && <div>

                        <div className='grid grid-cols-2 gap-3 space-y-1' >
                            <p>Avg Cost : <span className=''>{avgCost} BDT</span> </p>
                            <p>Open: {travelTime} days/per week</p>
                        </div>
                        <div className='grid grid-cols-2 gap-3 space-y-1'>
                            <p>Visitors : {totalVisitors}/per year</p>
                            <p>Seasonality: {season}</p>
                        </div>
                    </div>
                }
                <button className="btn bg-white text-primary-color hover:bg-primary-color hover:text-white border border-primary-color px-5">View Details</button>
            </div>
        </div>
    );
};

export default SpotCard;