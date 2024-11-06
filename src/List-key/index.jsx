import { useState } from "react";

export default function ListKey() {
  const [listUser, setListUser] = useState([
    { id: 1, name: "khoa", age: 19 },
    { id: 2, name: "thao", age: 21 },
    { id: 3, name: "hung", age: 28 },
  ]);
  const renderListUser = () => {
    const listUserNew = listUser.map((user) => {
      return (
        <li key={user.id}>
          Ho ten: {user.name} - Tuoi: {user.age}
        </li>
      );
    });

    return listUserNew;
  };

  const [listCars, setListCars] = useState([
    { id: 1, url: "./public/images/red-car.jpg", name: "xe do" },
    { id: 2, url: "./public/images/black-car.jpg", name: "xe den" },
    { id: 3, url: "./public/images/silver-car.jpg", name: "xe xam" },
  ]);
  const renderListCar = () => {
    const carsNew = listCars.map((car) => {
      return (
        <div
          key={car.id}
          className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {car.name}
            </h5>
          </a>
          <img src={car.url} alt="" />
        </div>
      );
    });
    return carsNew;
  };

  return (
    <div>
      <h1>List Key</h1>
      <ul>{renderListUser()}</ul>
      <div className="grid grid-cols-3">{renderListCar()}</div>
    </div>
  );
}
