import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { toast } from "react-toastify";
import api from "../../api/index";
import { Store, UpdateStore } from "../../StoreContext";

const SettingPersonalInformation = () => {
  const updateStore = UpdateStore();
  const [values, setValues] = React.useState({
    currentPassword: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showPassword2: false,
    showPassword3: false
  });
  const { currentPassword, password, confirmPassword } = values;
  const { user } = Store();
  const [formData, setFormData] = useState({
    username: user?.username || "",
    email: user?.email ? user.email[0] : "",
    phone_number: user?.phone_number || "",
    iban: user?.iban || "",
    country: user?.country || "",
    account_number: user?.account_number || "",
    bank_identifier: user?.bank_identifier || ""
  });
  const {
    username,
    email,
    phone_number,
    iban,
    country,
    account_number,
    bank_identifier
  } = formData;
  useEffect(() => {
    setFormData({
      username: user?.username || "",
      email: user?.email ? user.email[0] : "",
      phone_number: user?.phone_number || "",
      iban: user?.iban || "",
      country: user?.country || "",
      account_number: user?.account_number || "",
      bank_identifier: user?.bank_identifier || ""
    });
  }, [user]);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handlechange1 = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };
  const handleClickShowPassword2 = () => {
    setValues({
      ...values,
      showPassword2: !values.showPassword2
    });
  };
  const handleClickShowPassword3 = () => {
    setValues({
      ...values,
      showPassword3: !values.showPassword3
    });
  };
  const SubmitEvent = async (e) => {
    let newformData = formData;
    if (password && currentPassword && confirmPassword) {
      if (password != confirmPassword) {
        return toast.success("Confirm password Not match");
      }
      newformData = { ...formData, password, currentPassword };
    }
    console.log("newformData", newformData);
    let res = await api("post", `/users/basicInfo/${user?._id}`, newformData);
    if (res) {
      updateStore({ user: res.data.user });
      toast.success("Modifier le profil avec succès");
    }
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div>
        {" "}
        <p className="setting_C_Heading">
          Personal information &nbsp; &nbsp;
          <span style={{ opacity: 0.5 }}> Payment information</span>
        </p>
      </div>
      <div className="setting_C_Profile">
        <div className="setting_C_Container">
          {/* /* ------------------------------- 1 colmn div -------------------------------  */}

          <div1 className="setting_C_Colmn">
            <div className="setting_C_Inputs">
              <label className="setting_C_label" htmlFor="">
                Edit ID
              </label>
              <input
                className="setting_C_inpt"
                type="text"
                value={username}
                onChange={handlechange1}
                placeholder={"@arslanash"}
                name="username"
              />
            </div>
            <div className="setting_C_Inputs">
              <label className="setting_C_label" htmlFor="">
                Email Address
              </label>
              <input
                className="setting_C_inpt"
                type="email"
                value={email}
                placeholder="arskanash@gmail.com"
                onChange={handlechange1}
                name="email"
              />
            </div>
            <div className="setting_C_Inputs">
              <label className="setting_C_label" htmlFor="">
                Phone Number
              </label>
              <input
                className="setting_C_inpt"
                type="number"
                value={phone_number}
                onChange={handlechange1}
                placeholder="+33 755 556 674"
                name="phone_number"
              />
            </div>
            {/* /* ------------------------------- 1 colmn div part2 -------------------------------  */}
            <p className="setting_C_Heading2">Password</p>
            <div className="setting_C_Inputs">
              <label className="setting_C_label" htmlFor="">
                Current Password
              </label>
              <OutlinedInput
                className="setting_C_inpt2"
                disabledPadding
                type={values.showPassword ? "text" : "password"}
                value={values.currentPassword}
                onChange={handleChange("currentPassword")}
                placeholder="********"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? (
                        <VisibilityOff className="setting_show_hide_icon" />
                      ) : (
                        <Visibility className="setting_show_hide_icon" />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>
            <div className="setting_C_Inputs">
              <label className="setting_C_label" htmlFor="">
                New Password
              </label>
              <OutlinedInput
                className="setting_C_inpt2"
                disabledPadding
                type={values.showPassword2 ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                placeholder="********"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword2}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword2 ? (
                        <VisibilityOff className="setting_show_hide_icon" />
                      ) : (
                        <Visibility className="setting_show_hide_icon" />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>
            <div className="setting_C_Inputs">
              <label className="setting_C_label" htmlFor="">
                Confirm New Password
              </label>
              <OutlinedInput
                className="setting_C_inpt2"
                disabledPadding
                type={values.showPassword3 ? "text" : "password"}
                value={values.confirmPassword}
                onChange={handleChange("confirmPassword")}
                placeholder="********"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword3}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword3 ? (
                        <VisibilityOff className="setting_show_hide_icon" />
                      ) : (
                        <Visibility className="setting_show_hide_icon" />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>
          </div1>
          {/* /* ------------------------------- clmn div 2 -------------------------------  */}
          <div className="setting_C_Colmn2">
            {/* <>
              <p className="setting_C_Heading">Payment Method</p>

              <div className="setting_C_Inputs">
                <label className="setting_C_label" htmlFor="">
                  IBAN
                </label>
                <input
                  className="setting_C_inpt"
                  type="text"
                  value={iban}
                  onChange={handlechange1}
                  placeholder="FR14 2004 1010 0505 0001 3M02 606"
                  name="iban"
                />
              </div>
              <div className="setting_C_Inputs">
                <label className="setting_C_label" htmlFor="">
                  Bank Identifier
                </label>
                <input
                  className="setting_C_inpt"
                  type="email"
                  placeholder="20041"
                  value={bank_identifier}
                  onChange={handlechange1}
                  name="bank_identifier"
                />
              </div>
              <div className="setting_C_Inputs">
                <label className="setting_C_label" htmlFor="">
                  Account Number
                </label>
                <input
                  className="setting_C_inpt"
                  type="number"
                  placeholder="0500013M026"
                  value={account_number}
                  onChange={handlechange1}
                  name="account_number"
                />
              </div>
              <div className="setting_C_Inputs">
                <label className="setting_C_label" htmlFor="">
                  Country
                </label>
                
                <select
                  className="setting_C_inpt"
                  style={{ appearance: "none" }}
                  value={country}
                  onChange={handlechange1}
                  name="country"
                >
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="American Samoa">American Samoa</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Anguilla">Anguilla</option>
                  <option value="Antartica">Antarctica</option>
                  <option value="Antigua and Barbuda">
                    Antigua and Barbuda
                  </option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Aruba">Aruba</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bermuda">Bermuda</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bosnia and Herzegowina">
                    Bosnia and Herzegowina
                  </option>
                  <option value="Botswana">Botswana</option>
                  <option value="Bouvet Island">Bouvet Island</option>
                  <option value="Brazil">Brazil</option>
                  <option value="British Indian Ocean Territory">
                    British Indian Ocean Territory
                  </option>
                  <option value="Brunei Darussalam">Brunei Darussalam</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Cape Verde">Cape Verde</option>
                  <option value="Cayman Islands">Cayman Islands</option>
                  <option value="Central African Republic">
                    Central African Republic
                  </option>
                  <option value="Chad">Chad</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Christmas Island">Christmas Island</option>
                  <option value="Cocos Islands">Cocos (Keeling) Islands</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo">Congo</option>
                  <option value="Congo">
                    Congo, the Democratic Republic of the
                  </option>
                  <option value="Cook Islands">Cook Islands</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                  <option value="Croatia">Croatia (Hrvatska)</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="East Timor">East Timor</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Falkland Islands">
                    Falkland Islands (Malvinas)
                  </option>
                  <option value="Faroe Islands">Faroe Islands</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="France Metropolitan">
                    France, Metropolitan
                  </option>
                  <option value="French Guiana">French Guiana</option>
                  <option value="French Polynesia">French Polynesia</option>
                  <option value="French Southern Territories">
                    French Southern Territories
                  </option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Gibraltar">Gibraltar</option>
                  <option value="Greece">Greece</option>
                  <option value="Greenland">Greenland</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guadeloupe">Guadeloupe</option>
                  <option value="Guam">Guam</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea-Bissau">Guinea-Bissau</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Heard and McDonald Islands">
                    Heard and Mc Donald Islands
                  </option>
                  <option value="Holy See">
                    Holy See (Vatican City State)
                  </option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="India">India</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Iran">Iran (Islamic Republic of)</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Democratic People's Republic of Korea">
                    Korea, Democratic People's Republic of
                  </option>
                  <option value="Korea">Korea, Republic of</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Lao">Lao People's Democratic Republic</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon" selected>
                    Lebanon
                  </option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libyan Arab Jamahiriya">
                    Libyan Arab Jamahiriya
                  </option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Macau">Macau</option>
                  <option value="Macedonia">
                    Macedonia, The Former Yugoslav Republic of
                  </option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Martinique">Martinique</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mayotte">Mayotte</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Micronesia">
                    Micronesia, Federated States of
                  </option>
                  <option value="Moldova">Moldova, Republic of</option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Netherlands Antilles">
                    Netherlands Antilles
                  </option>
                  <option value="New Caledonia">New Caledonia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Niue">Niue</option>
                  <option value="Norfolk Island">Norfolk Island</option>
                  <option value="Northern Mariana Islands">
                    Northern Mariana Islands
                  </option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau">Palau</option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Pitcairn">Pitcairn</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Reunion">Reunion</option>
                  <option value="Romania">Romania</option>
                  <option value="Russia">Russian Federation</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Saint Kitts and Nevis">
                    Saint Kitts and Nevis
                  </option>
                  <option value="Saint LUCIA">Saint LUCIA</option>
                  <option value="Saint Vincent">
                    Saint Vincent and the Grenadines
                  </option>
                  <option value="Samoa">Samoa</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome and Principe">
                    Sao Tome and Principe
                  </option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovakia">Slovakia (Slovak Republic)</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="South Georgia">
                    South Georgia and the South Sandwich Islands
                  </option>
                  <option value="Span">Spain</option>
                  <option value="SriLanka">Sri Lanka</option>
                  <option value="St. Helena">St. Helena</option>
                  <option value="St. Pierre and Miguelon">
                    St. Pierre and Miquelon
                  </option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Svalbard">
                    Svalbard and Jan Mayen Islands
                  </option>
                  <option value="Swaziland">Swaziland</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syria">Syrian Arab Republic</option>
                  <option value="Taiwan">Taiwan, Province of China</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania">Tanzania, United Republic of</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Togo">Togo</option>
                  <option value="Tokelau">Tokelau</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad and Tobago">
                    Trinidad and Tobago
                  </option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Turks and Caicos">
                    Turks and Caicos Islands
                  </option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Emirates">
                    United Arab Emirates
                  </option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="United States Minor Outlying Islands">
                    United States Minor Outlying Islands
                  </option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Vietnam">Viet Nam</option>
                  <option value="Virgin Islands (British)">
                    Virgin Islands (British)
                  </option>
                  <option value="Virgin Islands (U.S)">
                    Virgin Islands (U.S.)
                  </option>
                  <option value="Wallis and Futana Islands">
                    Wallis and Futuna Islands
                  </option>
                  <option value="Western Sahara">Western Sahara</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Serbia">Serbia</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
              </div>
            </> */}
          </div>
          <div className="setting_C_Colmn"></div>
        </div>
      </div>
      <div>
        <button
          className="formbtn2"
          type="submit"
          onClick={SubmitEvent}
          style={{
            background: "linear-gradient(326deg, #662F88 8%, #20BF55 132%)",
            color: "white",
            fontWeight: "600",
            borderRadius: " 4px",
            cursor: "pointer",
            border: "none",
            width: " 133.93px",
            height: "44px",
            fontSize: "14px",
            display: "bl8ck",
            margin: "25px 4px"
          }}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default SettingPersonalInformation;
