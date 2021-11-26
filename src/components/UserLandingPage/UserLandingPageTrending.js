import React from 'react'
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import trendinglogo from "../../assets/img/trendinglogo.png";
const UserLandingPageTrending = () => {
    return (
        <>
            <Box className="table-block" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {/* <div className="community-logo">
<span>home</span>
<span>home1</span>
<span>home2</span>
</div> 
  <div>

  </div> */}
                <table className="trending-table">
                    <thead>
                        <tr>
                            <th scope="col">Top Games</th>
                            <th scope="col">Top Trendy Games</th>
                            <th scope="col">Nft Games</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        <tr>
                            <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                                <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                                <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                        </tr>
                        <tr>
                            <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                                <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                                <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                        </tr>
                        <tr>
                            <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                                <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                                <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                        </tr>
                        <tr>
                            <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                                <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                                <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                        </tr>
                        <tr>
                            <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                                <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                                <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                        </tr>
                        <tr>
                            <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                                <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                                <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                        </tr>
                        <tr>
                            <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                                <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                                <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                        </tr>
                        <tr>
                            <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                                <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                                <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                        </tr>
                        <tr>
                            <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                                <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                                <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                        </tr>
                        <tr>
                            <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                                <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                                <td data-label="FIFA 22">
                                <div className="table-img-text">
                                    <img className="table-img" src={trendinglogo} alt="" />
                                    <span >FIFA 22</span>
                                </div> </td>
                        </tr>
                    </tbody>
                </table>
            </Box>
        </>
    )
}

export default UserLandingPageTrending
