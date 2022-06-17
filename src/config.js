let baseUrl = "";

if (window.location.host === "zypzap.com") {
  baseUrl = "https://api.zypzap.com/api";
} else if (window.location.host === "zypzap-demo.web.app") {
  baseUrl = "https://passtotrip.falconit.com.pk/api";
} else {
  baseUrl = "http://localhost:5000/api/";
}

module.exports = { baseUrl };
