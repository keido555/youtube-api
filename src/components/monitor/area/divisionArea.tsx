import Image from "next/image";

export const DivisionArea = () => {
  return (
    <div>
      <div className="divisionArea_item">
        <div className="divisionArea_inner">
          <div className="divisionImage">
            <h3>A</h3>
          </div>
          <div className="divisionImage">
            <h3>B</h3>
          </div>
        </div>
        <div className="divisionArea_inner">
          <div className="divisionImage">
            <h3>C</h3>
          </div>
          <div className="divisionImage">
            <h4>D</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
