import React from "react";
import "./widgetLg.css";

const widgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQFK4UA28PmAig/profile-displayphoto-shrink_200_200/0/1642565209014?e=1658361600&v=beta&t=LYHcxAHSAEbRT9kcqalJ_lFazuXNVyuCKSBzadCfiKg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Sandip Kurmi</span>
          </td>
          <td className="widgetLgDate">2 jun 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQFK4UA28PmAig/profile-displayphoto-shrink_200_200/0/1642565209014?e=1658361600&v=beta&t=LYHcxAHSAEbRT9kcqalJ_lFazuXNVyuCKSBzadCfiKg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Sandip Kurmi</span>
          </td>
          <td className="widgetLgDate">2 jun 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQFK4UA28PmAig/profile-displayphoto-shrink_200_200/0/1642565209014?e=1658361600&v=beta&t=LYHcxAHSAEbRT9kcqalJ_lFazuXNVyuCKSBzadCfiKg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Sandip Kurmi</span>
          </td>
          <td className="widgetLgDate">2 jun 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQFK4UA28PmAig/profile-displayphoto-shrink_200_200/0/1642565209014?e=1658361600&v=beta&t=LYHcxAHSAEbRT9kcqalJ_lFazuXNVyuCKSBzadCfiKg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Sandip Kurmi</span>
          </td>
          <td className="widgetLgDate">2 jun 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQFK4UA28PmAig/profile-displayphoto-shrink_200_200/0/1642565209014?e=1658361600&v=beta&t=LYHcxAHSAEbRT9kcqalJ_lFazuXNVyuCKSBzadCfiKg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Sandip Kurmi</span>
          </td>
          <td className="widgetLgDate">2 jun 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Panding" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default widgetLg;
