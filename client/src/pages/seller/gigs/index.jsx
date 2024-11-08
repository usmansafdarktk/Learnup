import { GET_USER_GIGS_ROUTE } from "../../../utils/constants";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useStateProvider } from "../../../context/StateContext";

function Index() {
  const [gigs, setGigs] = useState([]);
  const [{ showLoginModal, showSignupModal, isSeller, userInfo }, dispatch] =
    useStateProvider();
  
  useEffect(() => {
    const getUserGigs = async () => {
      try {
        const {
          data: { gigs: gigsData },
        } = await axios.get(GET_USER_GIGS_ROUTE, {
          withCredentials: true,
        });
        setGigs(gigsData);
      } catch (err) {
        console.log(err);
      }
    };
    getUserGigs();
  }, []); 

  return (
    <div className="min-h-[80vh] my-10 mt-0 px-32">
      <h3 className="m-5 text-2xl font-semibold">All your Gigs</h3>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 border-[#1DBF73] bg-[#1DBF73] text-white">
                Name
              </th>
              <th scope="col" className="px-6 py-3 border-[#1DBF73] bg-[#1DBF73] text-white">
                Category
              </th>
              <th scope="col" className="px-6 py-3 border-[#1DBF73] bg-[#1DBF73] text-white">
                Price
              </th>
              <th scope="col" className="px-6 py-3 border-[#1DBF73] bg-[#1DBF73] text-white">
                Delivery Time
              </th>
              <th scope="col" className="px-6 py-3 border-[#1DBF73] bg-[#1DBF73]">
                <span className="sr-only">Edit</span>
              </th>
              <th scope="col" className="px-6 py-3 border-[#1DBF73] bg-[#1DBF73]">
                <span className="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {gigs.map(({ title, category, price, deliveryTime, id }) => {
              return (
                <tr
                  className="bg-white hover:bg-gray-50"
                  key={id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {title}
                  </th>
                  <td className="px-6 py-4">{category}</td>
                  <td className="px-6 py-4">{price}</td>
                  <td className="px-6 py-4">{deliveryTime}</td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      href={`/seller/gigs/${id}`}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Edit
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link
                        href={`/seller/gigs/${id}`}
                        className="font-medium text-red-600 hover:underline"
                      >
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Index;
