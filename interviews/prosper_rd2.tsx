import React, { useState } from "react";
import "../styles.css";

interface Props {
  searchSource: Array<string>;
  value?: Array<string>;
  placeholder?: string;
  autoFocus?: boolean;
  label?: string;
  maxWidth?: string;
  noResultsValue?: string;
  maxSelection?: number;
}

const TagInput = (props: Props) => {
  const {
    value,
    maxSelection = 5,
    noResultsValue = "There are no matching results",
    label,
    maxWidth,
    autoFocus,
    searchSource,
    placeholder
  } = props;

  // array of current tags
  // tags can be pre-populated with 'value' prop
  const [tags, setTags] = useState<Array<string>>(value ?? []);
  // current text input
  const [currInput, setCurrInput] = useState<string>("");
  // current suggestions based on input
  const [suggestions, setSuggestions] = useState<Array<string>>([]);

  // function to remove tag from state array
  const removeTag = (i: number): void => {
    // add code here
    const tempTags = Array.from(tags);
    tempTags.splice(i, 1);

    setTags(tempTags);
  };

  // handles 'enter', 'backspace', and text reset
  const inputKeyDown = (e: any): void => {
    const val = e.target.value;
    // add tag after hitting 'enter' key
    // if there is input text, and selections < set maximum
    if (e.keyCode === 13 && val && tags.length < maxSelection) {
      // do not add duplicates
      if (tags.find((tag) => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      // update current list of tags in state with new tag
      // add first suggestion not already included in 'tags'
      let nextTag = "";
      for (let i = 0; i < suggestions.length; i++) {
        if (
          !tags.find(
            (tag) => tag.toLowerCase() === suggestions[i].toLowerCase()
          )
        ) {
          nextTag = suggestions[i];
          break;
        }
      }
      // add next tag as the current input or 'nextTag'
      if (nextTag === noResultsValue) {
        setTags([...tags, val]);
      } else {
        setTags([...tags, nextTag]);
      }
      // reset/empty current text input
      setCurrInput("");
    } else if (e.keyCode === 8 && !val) {
      // remove tag after hitting 'backspace' key, if no current input
      removeTag(tags.length - 1);
    }
  };

  // renders dropdown of suggestions from provided search source
  const renderSuggestions = () => {
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item) => (
          <li
            key={item}
            className="list-item"
            onClick={(e) => {
              if (
                item === noResultsValue || // cannot click on 'noResultsValue'
                tags.find((tag) => tag.toLowerCase() === item.toLowerCase())
              ) {
                setCurrInput("");
                setSuggestions([]);
                return;
              }
              if (tags.length < maxSelection) {
                setTags([...tags, item]);
              }
              setCurrInput("");
              setSuggestions([]);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  };

  const handleChange = (e: any): void => {
    setCurrInput(e.target.value.replace(/[^A-Za-z\s]/g, "")); // restricted to alphabetic characters and whitespace
    const suggestionList = searchSource.filter((item) =>
      item.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSuggestions(
      suggestionList.length > 0 ? suggestionList : [noResultsValue ?? ""] // could make string more generic for reusability
    );
  };

  return (
    <>
      <div className="input-tag-header">
        {label && (
          <div key={label} className="input-tag-label">
            {label}
          </div>
        )}
        {
          // updated to `!== Infinity` post-submission
          maxSelection !== Infinity && (
            <div>{`(Choose up to ${maxSelection})`}</div>
          )
        }
      </div>
      <div className="input-tag" style={{ maxWidth: maxWidth }}>
        <ul className="input-tag__tags">
          {tags.map((tag, i) => (
            // map over array of tags to render
            // key set equal to tag for accessibility
            <li key={tag}>
              {tag}
              <button
                key={`Remove ${tag}`}
                type="button"
                onClick={() => {
                  removeTag(i);
                }}
              >
                +
              </button>
            </li>
          ))}
          <li className="input-tag__tags__input">
            <input
              key="text-input"
              type="text"
              autoFocus={autoFocus}
              placeholder={placeholder}
              value={currInput}
              onKeyDown={inputKeyDown}
              onChange={handleChange}
            />
          </li>
        </ul>
        {currInput && renderSuggestions()}
      </div>
    </>
  );
};

export default TagInput;

// Gets passed into the TagInput component as searchSource
const spices = [
	"Adobo Seasoning",
	"Aji Amarillo Chile Powder",
	"Aji Amarillo Chiles, Dried",
	"Aji Panca Chile Powder",
	"Aji Panca Chiles, Dried",
	"Aji Paprika Chiles, Whole",
	"Aleppo Pepper, Mediterranean (Crushed)",
	"Allspice Berries, Whole (Jamaican)",
	"Allspice, Ground",
	"Almond Extract, Natural",
	"Amaretto Flavoring, Natural",
	"Ancho Chile Peppers, Whole",
	"Ancho Chile Powder",
	"Anise Extract, Pure",
	"Anise Seed",
	"Annatto Powder",
	"Annatto Seeds",
	"Arrowroot Powder",
	"Assam Tea (Kondoli)",
	"Baharat Spice Blend",
	"Bamboo Mushrooms, Dried",
	"Basil, Dried",
	"Basil, Ground",
	"Bay Leaves, Ground",
	"Bay Leaves, Whole (Hand Selected)",
	"BBQ Seasoning",
	"BBQ Seasoning, Hickory",
	"Beanilla Vanilla Extract (Double-Fold 2X)",
	"Beanilla Vanilla Extract (Single-Fold 1X)",
	"Beanilla Vanilla Paste (Blended), 2-Fold",
	"Berbere Spice (Ethiopian Spice Blend)",
	"Bird's Eye Chili",
	"Bird's Eye Chili Powder",
	"Bistro Mushroom Blend",
	"Black Currant Tea",
	"Black Fungus (Cloud Ear), Dried",
	"Black Garlic Cloves",
	"Black Garlic Powder",
	"Black Pepper (Fine Ground)",
	"Black Peppercorns",
	"Black Peppercorns (Smoked)",
	"Black Peppercorns, Ground (Smoked)",
	"Black Salt (Kala Namak)",
	"Black Tea, Orange Pekoe",
	"Black Truffle Salt",
	"Black Trumpet Mushrooms, Dried",
	"Black Walnut Flavoring, Natural & Artificial",
	"Blackberry Fruit Tea Blend",
	"Blazei Brazilian Cap Mushrooms, Dried",
	"Bolete Mushroom Powder",
	"Bolete Mushrooms (Chilean), Dried",
	"Bolete Mushrooms (European), Dried",
	"Boston Round Glass Bottle, 2 oz.",
	"Boston Round Glass Bottle, 4 oz.",
	"Boston Round Glass Bottle, 8 oz.",
	"Bourbon Vanilla Rooibos Tea",
	"Brandy Flavoring, Natural",
	"Brown Sugar, Dark",
	"Brown Sugar, Granulated",
	"Cajun Blackening Seasoning",
	"Cajun Seasoning",
	"Calabrian Chile Peppers (Peperoncino)",
	"Canadian Steak Seasoning",
	"Candy Cap Mushrooms, Dried",
	"Cane Sugar Cubes, Brown",
	"Cane Sugar Cubes, White",
	"Cane Sugar, Dried (Organic)",
	"Cane Syrup, Dried",
	"Cane Syrup, Powdered",
	"Cape Cod Seasoning",
	"Caraway Seeds",
	"Caraway, Ground",
	"Cardamom Pods, Black",
	"Cardamom Pods, Green",
	"Cardamom Seeds, Decorticated",
	"Cardamom, Black (Coarse Cut)",
	"Cardamom, Ground",
	"Cardamom, Red (Cao Guo)",
	"Carom Seeds, Ground",
	"Cascabel Chile Peppers, Dried",
	"Cassia Bark (Cinnamon)",
	"Caster Sugar (Baker’s Special)",
	"Cauliflower Mushrooms, Dried",
	"Cayenne Pepper, Ground",
	"Celery Salt",
	"Celery Seed",
	"Celery, Cross-Cut",
	"Ceylon Tea, Broken Orange Pekoe",
	"Chai Tea",
	"Chamomint Tea",
	"Champignon White Button Mushrooms, Dried",
	"Chanterelle Mushrooms, Dried",
	"Cherry Extract, Natural",
	"Chervil, Dried",
	"Chile De Arbol Powder",
	"Chile De Arbol, Dried",
	"Chile Verde Salt",
	"Chili Powder",
	"Chiltepin Pepper",
	"Chimichurri Blend",
	"Chipotle Chile Peppers, Brown (Smoked)",
	"Chipotle Chile Peppers, Morita",
	"Chipotle Chili Powder, Brown",
	"Chipotle Creole Spice Rub",
	"Chipotle Powder, Morita",
	"Chive Flakes",
	"Chive Powder",
	"Christmas Peppercorn Blend",
	"Cilantro Flakes, Dried",
	"Cinnamon Apricot Tisane",
	"Cinnamon Flavoring, Natural",
	"Cinnamon Sticks, 10 Inch Long",
	"Cinnamon Sticks, 4 Inch",
	"Cinnamon, Ceylon",
	"Cinnamon, Korintje (Ground)",
	"Cinnamon, Vietnamese",
	"Citrus & Ginger Spice Blend",
	"Citrus Chamomile Tea",
	"Citrus Green Tea",
	"Cloves (Ground)",
	"Cloves, Whole (Hand Picked)",
	"Cocoa Nibs",
	"Coconut Chips, Toasted (Unsweetened)",
	"Coconut Chips, Unsweetened",
	"Coconut Flavoring, Natural & Artificial",
	"Coconut Milk Powder",
	"Coconut Sugar",
	"Coconut, Fancy Shredded",
	"Coconut, Macaroon (Finely Shredded)",
	"Coconut, Medium Desiccated",
	"Coffee Chile Spice Rub",
	"Coffee Flavoring, Natural",
	"Coriander Powder",
	"Coriander Seed (Extra Bold)",
	"Coriander, Cracked",
	"Corn Husks",
	"Cream of Tartar",
	"Cubeb Pepper (Berries)",
	"Cumin Powder",
	"Cumin Seeds",
	"Curing Salt, Pink",
	"Daikon Radish Seeds, Organic",
	"Darjeeling Tea",
	"Dark Cocoa Powder, Dutch Processed",
	"Dill Pollen",
	"Dill Seed, Indian",
	"Dill Weed, Dried",
	"Dry Mexican Mole Spice Blend",
	"Earl Grey Tea",
	"English Breakfast Black Tea",
	"Enoki Mushrooms, Dried",
	"Espresso Brava Salt",
	"European Mushroom Blend",
	"Fajita Marinade Seasoning",
	"Far East Rub",
	"Fennel Pollen",
	"Fennel Seeds",
	"Fennel, Ground",
	"Fenugreek Leaves, Dried",
	"Fenugreek Powder",
	"Fenugreek Seeds, Whole",
	"Five Peppercorn Mélange",
	"Five Peppercorn Mélange (Ground)",
	"Five Spice Powder, Chinese",
	"Fleur de Sel",
	"Fondant and Icing Sugar",
	"Forest Mushroom Blend",
	"Four Peppercorn Blend",
	"Four Peppercorn Blend (Ground)",
	"French Mustard and Herb Blend",
	"Galangal, Whole",
	"Garam Masala",
	"Garlic Pepper Steak Seasoning",
	"Garlic Powder",
	"Garlic Powder, Roasted",
	"Garlic Salt",
	"Garlic, Granulated",
	"Garlic, Minced",
	"Ghost Chili Pepper Powder",
	"Ghost Pepper, Dried",
	"Ginger Flavoring, Natural",
	"Ginger Peach Tea",
	"Ginger Powder",
	"Ginger Root, Sliced",
	"Ginger, Cracked",
	"Ginger, Crystallized",
	"Grains of Paradise (Melegueta Pepper)",
	"Grapefruit Powder",
	"Green Mango Powder (Amchoor)",
	"Green Peppercorns",
	"Green Peppercorns, Ground",
	"Green Serrano Chile Powder",
	"Green Tea (Chun Mee)",
	"Green Tea (Young Hyson)",
	"Guajillo Chile Powder",
	"Guajillo Chiles",
	"Gumbo File Powder",
	"Gunpowder Green Tea",
	"Habanero Pepper",
	"Habanero Powder, Pure",
	"Habanero Salt",
	"Harissa Spice Blend",
	"Hazelnut Flavoring, Natural",
	"Herbal Chocolate Chai",
	"Herbes de Provence",
	"Hibiscus Flowers, Dried",
	"Hibiscus Powder",
	"Hickory Steak Seasoning",
	"Himalayan Pink Salt",
	"Homemade Vanilla Extract Infusion Kit",
	"Honey Powder",
	"Honey, Granulated",
	"Horseradish Powder",
	"Hot Chili Powder",
	"Immortalitea",
	"Indian Vanilla Beans, Organic",
	"Irish Breakfast Blend",
	"Italian Herb Seasoning",
	"Jalapeno Chili Powder",
	"Jamaican Jerk Seasoning",
	"Japanese Yellow Curry Powder",
	"Japones Chile Peppers, Dried",
	"Jasmine Pearls",
	"Jasmine Tea",
	"Jerk Seasoning",
	"Juniper Berries, Ground",
	"Juniper Berries, Whole",
	"Kabsa Spice Mix",
	"Kaffir Lime Leaves",
	"Kaffir Lime Leaves (Ground)",
	"King Trumpet Mushrooms, Sliced",
	"Korean Black Garlic Seasoning",
	"Korean Red Chili Pepper Flakes (Gochugaru)",
	"Kukicha Twig Tea",
	"Lavender Flavoring, Natural",
	"Lavender, Dried (Culinary)",
	"Lemon Extract, Pure",
	"Lemon Extract, Pure (Organic)",
	"Lemon Juice Powder",
	"Lemon Mint Tea",
	"Lemon Peel, Granulated (Granules)",
	"Lemon Pepper Seasoning",
	"Lemongrass Powder",
	"Lime Flavoring, Natural",
	"Lime Fresco Salt",
	"Lime Juice Powder",
	"Lime Peel, Granulated (Granules)",
	"Lion's Mane Mushrooms, Dried",
	"Lobster Mushrooms, Dried",
	"Long Pepper",
	"Mace, Ground",
	"Madagascar Vanilla Bean Paste, 3-Fold",
	"Madagascar Vanilla Extract (Double-Fold 2X)",
	"Madagascar Vanilla Extract (Single-Fold 1X)",
	"Maitake Mushrooms (Hen of the Woods), Dried",
	"Mango Tea",
	"Maple Flavoring, Natural",
	"Maple Sugar",
	"Marjoram, Dried",
	"Matsutake Mushrooms, Dried",
	"Mediterranean Spice Blend",
	"Mexican Vanilla Extract (Double-Fold 2X)",
	"Mexican Vanilla Extract (Single-Fold 1X)",
	"Mild Chile Threads",
	"Molasses Powder",
	"Molasses, Granulated",
	"Morel Mushrooms, Dried",
	"Moroccan Mint Green Tea",
	"Mousseron Mushrooms, Dried",
	"Mulato Chile Peppers, Dried",
	"Mulling Spices",
	"Mushroom Jungle Blend",
	"Mustard Powder",
	"Mustard Seeds, Black",
	"Mustard Seeds, Brown",
	"Mustard Seeds, Yellow",
	"Nameko Mushrooms, Dried",
	"Natural Chocolate Extract",
	"Natural Vanilla Flavor",
	"New Mexico Chiles (Hatch), Dried",
	"New Mexico Chiles, Dried",
	"New Mexico Chili Powder (Anaheim)",
	"Nigella Seeds",
	"Nora Chile Peppers, Dried",
	"Northwoods Mushroom Blend",
	"Nutmeg, Ground",
	"Nutmeg, Whole",
	"Onion Powder",
	"Onion Powder (Toasted)",
	"Onion Salt",
	"Onion, Minced",
	"Oolong Tea",
	"Orange Extract, Pure",
	"Orange Extract, Pure (Organic)",
	"Orange Peel, Dried (Granulated)",
	"Oregano, Ground",
	"Oregano, Mediterranean",
	"Oregano, Mexican (Greek-Cut)",
	"Oregano, Mexican (Ground)",
	"Organic Vanilla Beans, Madagascar Bourbon",
	"Oyster Mushrooms, Dried",
	"Paddy Straw Mushrooms, Dried",
	"Paella Seasoning",
	"Panch Phoron, Bengali Five-Spice",
	"Paprika, 120-140 ASTA (Premium)",
	"Paprika, 85-100 ASTA (Standard Grade)",
	"Paprika, Hungarian (Sweet)",
	"Paprika, Hungarian, Smoked (Bittersweet)",
	"Paprika, Hungarian, Smoked (Sweet)",
	"Paprika, Spanish, Smoked (Hot)",
	"Parsley Flakes",
	"Pasilla Chili Powder",
	"Pasilla Pepper, Whole",
	"Passionberry Fruit Tisane",
	"Peppercorns, Tuxedo Blend",
	"Peppermint Extract, Pure",
	"Peppermint, Crushed",
	"Pequin Chiles, Dried",
	"Pickling Spice",
	"Pineapple Papaya Green Sencha Tea",
	"Pink Peppercorns",
	"Pink Peppercorns, Ground",
	"Pistachio Flavoring, Natural",
	"Pizza Seasoning",
	"Poppy Seeds, Blue",
	"Poppy Seeds, White",
	"Porcini Mushroom Rub",
	"Porcini Mushrooms, Cepes (Grade B)",
	"Porcini Mushrooms, Dried (Grade A)",
	"Porcini Mushrooms, Dried (Grade AA)",
	"Porcini Powder",
	"Portabella Mushroom Powder",
	"Portabella Mushrooms, Dried",
	"Poultry Seasoning Spice Rub",
	"Pumpkin Pie Spice",
	"Pumpkin Spice Vanilla Sugar",
	"Puya Chile Peppers, Dried",
	"Quatre épices",
	"Ras El Hanout",
	"Raspberry Extract, Natural",
	"Raspberry Powder",
	"Red Chili Flakes (Aleppo-Style)",
	"Red Pepper (Extra Hot), Crushed",
	"Red Pepper, Crushed",
	"Reishi Mushrooms, Dried",
	"Rock Crystal Sugar, Brown",
	"Rock Crystal Sugar, White",
	"Rooibos Tea (Red Bush Tea)",
	"Rosemary, Dried",
	"Rosemary, Ground",
	"Rum Flavoring, Natural & Artificial",
	"Saffron Milk Cap Mushrooms, Dried",
	"Saffron, Greek (Select)",
	"Saffron, Iranian (Sargol)",
	"Saffron, Spanish (Superior)",
	"Sage, Dalmatian",
	"Sage, Ground",
	"Sage, Rubbed",
	"Salsa Verde Seasoning",
	"Sassafras Powder",
	"Savory, Summer (Ground)",
	"Savory, Summer (Whole Leaf)",
	"Scorpion Pepper",
	"Scorpion Pepper Powder, Pure",
	"Scotch Bonnet Pepper",
	"Sea Salt, Alderwood (Smoked)",
	"Sea Salt, Applewood (Smoked)",
	"Sea Salt, Black Hawaiian",
	"Sea Salt, Coarse (Smoked)",
	"Sea Salt, Gray",
	"Sea Salt, Greek",
	"Sea Salt, Hawaiian Pink",
	"Sea Salt, Hawaiian Red (Coarse)",
	"Sea Salt, Hickory (Smoked)",
	"Sea Salt, Roasted Garlic",
	"Seafood Spice Blend",
	"Serrano Chile Peppers, Dried",
	"Serrano Chile Powder (Smoked)",
	"Sesame Seeds (Toasted)",
	"Sesame Seeds, Black",
	"Shallots",
	"Shichimi Togarashi (Japanese Seven Spice)",
	"Shiitake Mushroom Caps (Flower Top)",
	"Shiitake Mushroom Powder",
	"Shiitake Mushrooms, Dried (Premium Grade)",
	"Shiitake Mushrooms, Dried (Standard Grade)",
	"Shiitake Mushrooms, Sliced",
	"Sichuan Peppercorn Powder (Szechuan)",
	"Sichuan Peppercorns (Szechuan)",
	"Smoke Flavor, Hickory (Powder)",
	"Smoke Flavor, Mesquite",
	"Smoked Peppercorn Sage Rub",
	"Soy Sauce Powder",
	"Soy Sauce Powder, Tamari",
	"Spanish Rice Blend",
	"Spearmint Flavoring, Natural",
	"Spearmint, Crushed",
	"Spicy Curry Sea Salt",
	"Sriracha Powder",
	"Star Anise",
	"Star Anise, Coarse Cut",
	"Star Anise, Ground",
	"Steak Mushroom Blend",
	"Stir-Fry Mushroom Blend",
	"Strawberry Extract, Natural",
	"Strawberry Powder",
	"Sugar Sticks, Brown",
	"Sugar Sticks, White",
	"Sugar, White",
	"Sumac Spice",
	"Superfine Sugar",
	"Szechuan Pepper Salt (Sichuan)",
	"Szechuan Peppercorns, Coarse Ground (Sichuan)",
	"Taco Seasoning",
	"Tahitian (Papua New Guinea) Vanilla Beans",
	"Tahitian (Tahitensis) Vanilla Beans (Indonesia)",
	"Tahitian Vanilla Extract (Double-Fold 2X)",
	"Tahitian Vanilla Extract (Single-Fold 1X)",
	"Tahitian Vanilla Paste, 3-Fold",
	"Tall Square Glass Bottle, 17 oz.",
	"Tall Square Glass Bottle, 8.5 oz.",
	"Tamarind Powder",
	"Tandoori Spice",
	"Tarragon (French)",
	"Tellicherry Peppercorns, Black",
	"Thai Chili Pepper, Red",
	"Thai Chili Powder, Red",
	"Thai Coconut Green Curry Powder",
	"Thai Ginger Salt",
	"Thyme, Dried",
	"Thyme, Ground",
	"Tomato Powder",
	"Triple Berry Tea",
	"Turbinado Sugar",
	"Turkey Tail Mushrooms, Dried",
	"Turmeric Powder",
	"Urfa Biber Pepper Flakes",
	"Vadouvan Spice (French Masala Curry)",
	"Vanilla Bean Sampler, 3 Beans of Each Variety (6 Varieties)",
	'Vanilla Bean Seeds (Vanilla "Caviar")',
	"Vanilla Bean Sugar",
	"Vanilla Beans (Indonesian)",
	"Vanilla Beans (Madagascar Bourbon), Extract Grade B",
	"Vanilla Beans (Madagascar), Ground",
	"Vanilla Beans (Mexican)",
	"Vanilla Beans (Tahitian)",
	"Vanilla Beans (Tahitian), Ground",
	"Vanilla Beans (Tongan)",
	"Vanilla Beans (Ugandan)",
	"Vanilla Beans, Madagascar Bourbon",
	"Vanilla Extract, Organic (Single-Fold 1X)",
	"Vanilla Powder",
	"Vindaloo Curry Powder",
	"Vinegar Powder, Apple Cider",
	"Vinegar Powder, Malt",
	"Vinegar Powder, Red Wine",
	"Vinegar Powder, White Balsamic",
	"Vinegar Powder, White Distilled",
	"Wasabi, Powder",
	"White Pepper, Ground",
	"White Peppercorns",
	"White Pomegranate Tea",
	"White Tea, Bai Mu Dan",
	"Wild Berry Tea",
	"Wiri Wiri Chili Powder",
	"Wiri Wiri Peppers",
	"Wood Ear Mushrooms, Dried",
	"Wood Ear Mushrooms, Shredded",
	"Worcestershire Sauce Powder",
	"Yogi Tea",
	"Zaatar Spice"
  ];


  /**
   * Hi Jon!
Hello



Design Youtube

Scope the problem: What are the main requirements? What will user be doing?

UX/Feature Description:
- Browse videos
- Search videos
- Account? (optional)
	- Do have an account
  	- Profile
    - Save playlist videos (future state)
- Play videos
- Like and Comment on videos
- Upload videos


Assumptions about environment
- Videos must streamed w/ low latency
- High load times overall
- High demand for specific videos
- Wide geographic range, we want videos to be available worldwide


Key Issues
- Availability and performance
- Load balancing


Main Components:

Frontend/client app
- UI
- Communicate with backend services/APIs
	- Both to fetch videos
  - Stream videos
  - Manage registered profile
  - Functionalities such as Like, Comment, etc.
  
Resources/Services
- Data storage: videos
- Data storage: metadata for videos
- Data storage: user profile

- Backend Service: streaming video data
	- Integrate the Video Data Storage
  - Integrate client app
- Backend Service: uploading videos
- Backend Service: searching service
- Backend Service: user registration and authentication
- Backend Service: process business logic of extra functionalities (i.e. Likes, Comments, etc.)


Description of System
Upload Videos:
UI provide upload input type for video files
API endpoint that accepts video file
Video file stored to specific storage
   */
  



Hi Jon
Hello





public class TreeNode
{
	private int data;
	private TreeNode left;
	private TreeNode right;

	public TreeNode(int data)
	{
		this.data=data;
		this.left=null;
		this.right=null;
	}

	public TreeNode(int data,TreeNode left,TreeNode right)
	{
		this.data=data;
		this.left=left;
		this.right=right;
	}
	//getters
	//setters
}


Find the lowest common ancestor for the given 2 nodes.Nodes are present in the tree.
const path[]
function generatePath(root, target, ) {
	if (root === null) {
  	// Reached leaf and not found node, update path to account for backtracking
    return false;
  }

  if (root.data === target.data) {
  	path.push(root.data);
    return true;
  }
  
  if (root.left) {
  	path.push(root.data);
  	return generatePath(root.left, target);
  }
  
  if (root.right) {
  	path.push(root.data);
  	return generatePath(root.right, target);
  }
}

public int lowestCommonAncestor(TreeNode root,TreeNode n1,TreeNode n2)
{
	const path1;
  const path2;
	// Find n1 and build path
  if (n1.data === root.data) {
  	path1 = [root.data];
  }
  path1 = generatePath(root.left, n1, [root.data]); // [7, 1, 10]
  
  // Find n2 and build path
  if (n2.data === root.data) {
  	path2 = [root.data];
  }
  path2 = generatePath(root.left, n2, [root.data]); //[7,1,12]
  
  
  // Compare path1 and path2 to find lowest ancestor
  
  
}

																7
                            
                        1							8
                    10			12						13
                    
                  11									16			-1
                  
                  
                  
                  10   12 ->1
                  
                  11    12->1
                  
                  12 8  -> 7
                  
                  10 11->10