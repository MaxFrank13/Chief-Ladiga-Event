import React from "react";
import Header from "../../components/Header";
import spreadsheetInfo from '../../assets/google_spreadsheet_001.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function History() {
  return (
    <>
      <Header currentPage='history' />
      <section className='max-w-3xl mx-auto p-4 sm:text-lg flex flex-col gap-4'>
        <div>
          <h2 className='text-3xl border-b-2 inline-block'>Event Results</h2>
        </div>
        <div>
          <p>
            The Chief Ladiga Silver Comet Skate Challenge ran annually from 2011 through 2019. The COVID-19 pandemic shut the event down in 2020 and 2021. The following year, the event came under new management for 2023.
          </p>
        </div>
        <div>
          <p>
            Overall event results for each year can be found in <a href='https://docs.google.com/spreadsheets/d/1fFrUB4NrTBgYxvIFTwyv90QRexYTYma1UDrJew_BJpw/edit?usp=sharing' className='text-green-700 hover:text-green-500 font-bold'  target="_blank" rel="noreferrer">
              this Google Spreadsheet
            </a>
            .
          </p>
          <div className='p-4 flex flex-col text-base'>
            <div className='py-1 px-2 bg-yellow-200 rounded flex items-center gap-2 w-fit mb-4'>
              <FontAwesomeIcon icon={faCircleInfo} />
              <h5>
                Use the panel at the bottom of the spreadsheet to cycle through each year's results.
              </h5>
            </div>
            <div className='py-2 px-4 border-2 border-grey-300 rounded-lg'>
              <img src={spreadsheetInfo} alt='spreadsheet info' />
            </div>
            <small className='mx-auto'>
              screenshot of bottom of spreadsheet
            </small>
          </div>
        </div>
      </section>
=    </>
  )
}