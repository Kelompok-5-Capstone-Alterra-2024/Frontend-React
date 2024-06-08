import PaginationDetailOrganizationVolunteer from "./PaginationDetailOrganizationVolunteer";
import TabelDetailOrganizationVolunteer from "./TabelDetailOrganizationVolunteer";

const DetailOrganizationVolunteer = () => {
    return (
      <div className="pt-5 rounded-lg">
        <TabelDetailOrganizationVolunteer/>
        <PaginationDetailOrganizationVolunteer/>
      </div>
    );
  };
  
  export default DetailOrganizationVolunteer;