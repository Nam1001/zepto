import React, { useEffect, useState } from "react";

export default function ChipInput({ items }) {
  const [inputValue, setInputValue] = useState("");
  const [isItemsOn, setIsItemsOn] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [trackDelete, setTrackDelete] = useState(null);

  const filteredItems = items.filter(
    (item) =>
      !selectedItems.includes(item.name) &&
      (item.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        item.email.toLowerCase().includes(inputValue.toLowerCase()))
  );

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleItemClick = (item) => {
    setSelectedItems([...selectedItems, item.name]);
    setInputValue("");
  };

  const handleChipRemove = (itemName) => {
    setSelectedItems(
      selectedItems.filter((selectedItem) => selectedItem !== itemName)
    );
    setTrackDelete(itemName);
  };

  const handleBackSpaceClick = (event) => {
    if (event.keyCode === 8 && inputValue === "") {
      if (selectedItems.length === 0 && trackDelete) {
        setSelectedItems([trackDelete]);
        return;
      }
    }
    if (
      event.keyCode === 8 &&
      inputValue === "" &&
      selectedItems.length === 1
    ) {
      handleChipRemove(trackDelete);
      setTrackDelete(null);
    }
  };

  useEffect(() => {}, [selectedItems]);
  return (
    <div className="w-full h-full">
      <h1 className="flex w-full justify-center text-4xl font-bold p-4 mt-2 text-blue-500">
        Pick Users
      </h1>
      <div className="w-full p-2">
        <div
          className="flex flex-row gap-2 w-full p-2"
          style={{ border: "none", borderBottom: "2px solid blue" }}
        >
          <div className="flex flex-wrap">
            {selectedItems.map((itemName) => {
              const selectedItem = items.find((item) => item.name === itemName);
              return (
                <div
                  key={selectedItem.id}
                  className={`bg-gray-400 text-white rounded-full p-1 flex items-center m-1 ${
                    trackDelete === itemName ? "bg-yellow-500" : ""
                  }`}
                >
                  <img
                    src={selectedItem.profilImage}
                    alt={selectedItem.name}
                    className="w-8 h-8 rounded-full border"
                  />
                  <span className="ml-2">{selectedItem.name}</span>
                  <span
                    className="ml-2 mr-2 cursor-pointer"
                    onClick={() => handleChipRemove(itemName)}
                  >
                    X
                  </span>
                </div>
              );
            })}
            <div>
              <input
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Add user here.."
                className="border-red border-none p-2"
                onFocus={() => setIsItemsOn(true)}
                onKeyDown={handleBackSpaceClick}
              />
              {isItemsOn && (
                <ul className="bg-white border rounded-md mt-2 shadow-md max-w-max max-h-[300px] absolute mt-6  overflow-y-auto">
                  {filteredItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleItemClick(item)}
                      className="flex p-2 gap-4 cursor-pointer p-2 hover:bg-gray-200"
                    >
                      <img
                        src={item.profilImage}
                        alt={item.name}
                        className="w-10 h-10 rounded-full border border-indigo-600"
                      />
                      <div className="flex flex-row gap-2">
                        <li>{item.name}</li>
                        <li className="text-gray-400">{item.email}</li>
                      </div>
                    </div>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
