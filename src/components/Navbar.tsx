import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import icon from "../assets/favicon.svg";
import { addCity } from "../redux/slices/cities";
import { alert, wordNormalize } from "../utils/utils";
import { FiMenu } from 'react-icons/fi';

import "./Navbar.css"; 

const Navbar = () => {

   const dispatch = useDispatch<any>();
   const [search, setSearch] = useState<string>("");
   const cities = useSelector((state: any) => state.cities);  
   const pathMain = "/"; 
   const pathname = useLocation().pathname;
   const navigate = useNavigate();

   function onSearch(e: React.ChangeEvent<HTMLInputElement>): void {
      setSearch(e.target.value);
   }

   function onCleanSearch(): void {
      setSearch("");
   }

   function onSubmit(): void {
      
      if (!checkIfExists(search)) {
         dispatch(addCity(search));
      } else {
         alert('Oops...', 'The city was already added!');
      }      

      if(pathname !== pathMain){
         navigate(pathMain);
      }
      
      onCleanSearch();
   }

   function checkIfExists(search: string): boolean {
      return cities.list.find((c: any) => wordNormalize(c.search) === wordNormalize(search));
   }

   return (
      <nav className="navbar navbar-dark navbar-expand-lg">
         <div className="container">
            <div className="navbar-brand">
               <Link to="/">
                  <img className="navIcon" src={icon} alt="404"></img>
               </Link>
               <span className="navTitle ms-1 me-1">Weather App</span>
               <SocialIcon target="_blank" rel="noreferrer" url="https://www.linkedin.com/in/pedro-fede-casillas-dev/" bgColor="#0a66c2" fgColor="#fff" className="navIcon"></SocialIcon>
               <SocialIcon target="_blank" rel="noreferrer" url="https://github.com/PedroFedeCasillas/climaApp/tree/main" fgColor="#fff" className="navIcon"></SocialIcon>
            </div>
            <button className="navbar-toggler navbtnMenu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <FiMenu className="navIconMenu" />
            </button>
            <div className="collapse show navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                  </li>
               </ul>
               <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
                  <input
                     className="form-control me-2 navSearchbar"
                     type="search"
                     placeholder="Find city..."
                     aria-label="Search"
                     value={search}
                     onChange={onSearch}
                  />
                  <button
                     disabled={!search.length}
                     className="btn btn-primary navBtnSearch"
                     onClick={onSubmit}
                     type="submit">Search
                  </button>
               </form>
            </div>
         </div>
      </nav>
   )
}
export default Navbar;
