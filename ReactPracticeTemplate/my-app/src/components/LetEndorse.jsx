import { useState } from "react";
import "./LetEndorse.css";
export const LetEndorse = () => {
      const [formData, setFormData] = useState({});
      const name = "Prakash Chandra";
      const city = "Dhanbad";
      const business_idea = "online delivery";
  const handleChange = (e) => {
    //  console.log("x", e.target.checked)

    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <h1 className="heading">Form Data</h1>
      <div className="Outterbox">
        <div className="LeftInner">
          <label>
            {" "}
            Stage of business
            <select name="business_stage" onChange={handleChange}>
              <option value="Start-up">Start-up</option>
              <option value="Scale-up">Scale-up</option>
            </select>
          </label>
          <label>
            Age of establishment (years) (Enter 0 if it is yet to start-up)
            <input
              type="number"
              name="age_of_establishment"
              min="0"
              max="100"
              onChange={handleChange}
            />
          </label>

          <label>
            {" "}
            Primary Products/Services offfered
            <input
              type="text"
              name="Primary Products/Services offfered"
              onChange={handleChange}
            />
          </label>

          <label>
            {" "}
            Offered to
            <select name="offered_to" onChange={handleChange}>
              <option value="End customers">End customers</option>
              <option value="Wholesalers">Wholesalers</option>
              <option value="Distributors">Distributors</option>
              <option value="Retailers">Retailers</option>
            </select>
          </label>
          <label>
            Secondary Products/Services offfered
            <input type="text" name="secondary_product_service_offered" onChange={handleChange} />
          </label>

          <label>
            {" "}
            Processed products (Products you produce from the raw materials)
            <input type="text" name="processed_products" onChange={handleChange} />
          </label>

          <label>
            {" "}
            Years of relevant experience in this field
            <input type="number" name="relevant_experience" onChange={handleChange} />
          </label>

          <label>
            {" "}
            Skill training
            <select name="skill_training" onChange={handleChange}>
              <option value="No formal skill training">
                {" "}
                No formal skill training
              </option>
              <option value="Has formal skill training and certificate">
                Has formal skill training and certificate
              </option>
            </select>
          </label>
          <label>
            {" "}
            Unique Selling Proposition
            <select name="usp" multiple onChange={handleChange}>
              <option value="the entrepreneur's experience in this field">
                the entrepreneur's experience in this field
              </option>
              <option value="innovative product/service">
                innovative product/service
              </option>
              <option value="high profit margin">high profit margin</option>
              <option value="high growth potential">
                high growth potential
              </option>
              <option value="superior customer support">
                superior customer support
              </option>
              <option value="quality and affordable products/service">
                quality and affordable products/service
              </option>
              <option value="high demand in the target market (forward linkage)">
                high demand in the target market (forward linkage)
              </option>
              <option value="abundant supply of raw materials (backward linkage)">
                abundant supply of raw materials (backward linkage)
              </option>
              <option value="wide range of products/services">
                wide range of products/services
              </option>
              <option value="robust value-chain of the business">
                robust value-chain of the business
              </option>
              <option value="frequency of customer visits">
                frequency of customer visits
              </option>
            </select>
          </label>
          <label>
            {" "}
            Establishment type
            <select name="establishment_type" onChange={handleChange}>
              <option value="Factory">Factory</option>
              <option value="Mill">Mill</option>
              <option value="Stall">Stall</option>
              <option value="Workshop">Workshop</option>
              <option value="Boutique">Boutique</option>
              <option value="Vehicle">Vehicle</option>
              <option value="Centre">Centre</option>
              <option value="Store">Store</option>
              <option value="Farm">Farm</option>
              <option value="Plant">Plant</option>
              <option value="Processing Unit">Processing Unit</option>
              <option value="Shop">Shop</option>
              <option value="Vending cart">Vending cart</option>
              <option value="Manufacturing unit">Manufacturing unit</option>
            </select>
          </label>
          <label>
            {" "}
            Name of the area
            <input type="text" name="business_area" onChange={handleChange} />
          </label>
          <label>
            {" "}
            Locality of business
            <select name="business_locality" onChange={handleChange}>
              <option value="Urban">Urban</option>
              <option value="Rural">Rural</option>
              <option value="Semi-urban">Semi-urban</option>
              <option value="Slum">Slum</option>
            </select>
          </label>

          <label>
            {" "}
            Ownership of infrastructure
            <select name="infra_ownership" onChange={handleChange}>
              <option value="Rented">Rented</option>
              <option value="Leased">Leased</option>
              <option value="Self-owned">Self-owned</option>
            </select>
          </label>
          <label>
            {" "}
            Establishment area (in square feet) (Enter 0 if the establishment
            area is irrelevant)
            <input type="number" name="establishment_area" onChange={handleChange} />
          </label>

          <label>
            {" "}
            Reason for selecting this location
            <select name="reason_for_location" multiple onChange={handleChange}>
              <option value="Nearness to market">Nearness to market</option>
              <option value="Good footfall">Good footfall</option>
              <option value="Nearness to source of raw materials">
                Nearness to source of raw materials
              </option>
              <option value="Nearness to targeted customer demographics">
                Nearness to targeted customer demographics
              </option>
              <option value="Lesser competition around">
                Lesser competition around
              </option>
              <option value="Access to permit/license of operate">
                Access to permit/license of operate
              </option>
              <option value="Nearness to suppliers">
                Nearness to suppliers
              </option>
              <option value="Affordability (rent)">Affordability (rent)</option>
              <option value="No rental overheads">No rental overheads</option>
              <option value="Other such factors">Other such factors</option>
            </select>
          </label>
          <label>
            {" "}
            Market research
            <select name="market_research" onChange={handleChange}>
              <option value="Not conducted">Not conducted</option>
              <option value="Market research has been conducted ">
                Market research has been conducted{" "}
              </option>
            </select>
          </label>
          <label>
            {" "}
            Primary market
            <select name="primary_market" onChange={handleChange}>
              <option value="Local">Local</option>
              <option value="Regional">Regional</option>
              <option value="National">National</option>
              <option value="International">International</option>
            </select>
          </label>
          <label>
            {" "}
            Customers
            <input type="text" name="customers"  onChange={handleChange}/>
          </label>
          <label>
            {" "}
            Seasons of high sales
            <select name="seasonality" onChange={handleChange}>
              <option value="Consistent sales across all seasons">
                Consistent sales across all seasons
              </option>
              <option value="Higher sales in festive seasons">
                Higher sales in festive seasons
              </option>
              <option value="High sales in cropping/cultivation season">
                High sales in cropping/cultivation season
              </option>
              <option value="High sales in peak seasons"></option>
              <option value="etc">etc</option>
            </select>
          </label>
          <label>
            {" "}
            Competition
            <select name="competition" onChange={handleChange}>
              <option value="No similar goods/service provider in this locality">
                No similar goods/service provider in this locality
              </option>
              <option value="Only a few similar goods/service providers in this locality">
                Only a few similar goods/service providers in this locality
              </option>
              <option value="Many similar goods/service providers in this locality">
                Many similar goods/service providers in this locality
              </option>
            </select>
          </label>

          <label>
            {" "}
            List of Suppliers
            <input type="text" name="suppliers" onChange={handleChange}/>
          </label>
          <label>
            {" "}
            Marketing avenues
            <select name="marketing_avenues" multiple onChange={handleChange}>
              <option value="Distribution of marketing material (pamphlets/flyers)">
                Distribution of marketing material (pamphlets/flyers)
              </option>
              <option value="storefront/business branding">
                storefront/business branding
              </option>
              <option value="Seasonal discounts and offers">
                Seasonal discounts and offers
              </option>
              <option value="Cross-promotion">Cross-promotion</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Word of mouth">Word of mouth</option>
            </select>
          </label>
          <label>
            {" "}
            Avenues of scaling up in future
            <select name="scaleup_potential" multiple onChange={handleChange}>
              <option value="increasing the variety of product/service offering">
                increasing the variety of product/service offering
              </option>
              <option value="expanding the current offering to other geographies">
                expanding the current offering to other geographies
              </option>
              <option value="opening more outlets, growing the scale of operation">
                opening more outlets, growing the scale of operation
              </option>
              <option value="building value-chain integrations">
                building value-chain integrations
              </option>
              <option value="other allied revenue streams">
                other allied revenue streams
              </option>
            </select>
          </label>
        </div>
                    <div className="RightInner">
                          {/* <p>{$name}</p> */}
          <div>
            
            <span>{name}</span> is looking to <span>{formData.business_stage}</span>  their business of
            <span>{business_idea}</span>.
          </div>
          <div>
            
            This enterprise has been operational since <span>{formData.age_of_establishment}</span>
            years and has been serving its customers since then.
          </div>
          <div>
            
            This establishment offers products/services like-
           <span>{formData.product_service_offered} </span> to <span>{formData.offered_to}</span> .
          </div>
          <div>
            In addition, the enterprise shall also be involved in-
            <span>{formData.secondary_product_service_offered}</span>
          </div>
          <div>
            Other products of the enterprise shall include- <span>{formData.processed_products}</span> 
          </div>
          <div>
           <span>{name} </span> has relevant experience of <span>{formData.relevant_experience}</span>  years in this
            field.
          </div>
          <div>The entrepreneur <span>{formData.skill_training}</span>  in this field of work.</div>
          <div>The enterprise is uniquely positioned because of its - <span>{formData.usp}</span> </div>
          <div>
            The <span>{formData.establishment_type}</span>  is located in <span>{formData.business_locality}</span> area of
            <span>{city}</span> in a <span>{formData.infra_ownership}</span> property.
          </div>
          <div>The size of the establishment is <span>{formData.establishment_area}</span> sq.ft.</div>
          <div>This locality is selected because of - <span>{formData.reason_for_location}</span> .</div>
          <div>
            <span>{formData.market_research}</span> and the range of products and target market has
            been identified after that.
          </div>
          <div>
            The enterprise shall focus on offering its products/services to
            <span>{formData.primary_market}</span>  markets.
          </div>
             <div>Our customers shall include- <span>{formData.customers}</span></div>
          <div>
            The nature of the business is such that we expect <span>{formData.seasonality}</span> .
          </div>
          <div>Regarding competition, there are <span>{formData.competition}</span>.</div>
          <div>
             The enterprise shall procure goods/raw materials from <span>{ formData.suppliers}</span> .
          </div>
          <div>
            Our marketing avenues to reach the targeted customers shall include-
            <span>{formData.marketing_avenues}</span>
          </div>
          <div>
            The various foreseeable avenues of scaling up and growing the
            business in the foreseeable future include- <span>{formData.scaleup_potential}</span> .
          </div>
        </div>
      </div>
    </>
  );
};
