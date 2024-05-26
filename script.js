document.getElementById("cropForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  const cropName = document.getElementById("cropName").value;
  const soilPh = parseFloat(document.getElementById("soilPh").value);
  const disease = document.getElementById("disease").value;
  const waterAvailability = document.getElementById("waterAvailability").value;

  const data = [
    // { id: 1, cropName: "Crop A", soilPh: 6.5, disease: "Disease A", pesticide: "Pesticide X", waterAvailability: "High", recommendation: "Recommendation A" },
    // { id: 2, cropName: "Crop B", soilPh: 7, disease: "Disease B", pesticide: "Pesticide Y", waterAvailability: "Medium", recommendation: "Recommendation B" },
    //   // Add more data entries as needed
    
  {
    id: "sorghum",
    cropName: "Sorghum",
    climate: "It grows best in temperatures between 25°C to 35°C (77°F to 95°F). However, it can also tolerate temperatures outside this range to some extent.",
    waterAvailability: "Adequate moisture is crucial, especially during critical growth stages such as germination, flowering, and grain filling. While sorghum is relatively drought-tolerant, consistent moisture availability leads to better yields. However, excess water can lead to water-logging and root rot.",
    soilQuality: "Sandy loam or loamy soils are considered ideal for sorghum cultivation. However, it could be grown at a wide range of fertile soil.",
    disease: "Common diseases that affect sorghum include downy mildew, anthracnose, and rust.",
    pest: "Common pests that affect sorghum include aphids, stem borers, and head bugs.",
    soilPh: "pH level between 5.5 and 7.5.",
    recommendation: "Integrated pest management (IPM) practices and disease-resistant varieties can help mitigate risks. Effective weed control measures such as mechanical cultivation, mulching, and herbicide application are necessary to keep weed populations in check."
  },
  {
    id: "turmeric",
    cropName: "Turmeric",
    climate: "It grows best in temperatures between 20°C to 30°C requires a frost-free environment. While it can tolerate some shade, it generally prefers full sun or partial shade.",
    waterAvailability: "Turmeric requires consistent moisture throughout the growing season, especially during the initial stages of growth and tuber formation. However, it is susceptible to water-logging, so the soil should be well-drained to prevent water stagnation.",
    soilQuality: "pH should ideally be between 6.0 to 7.5. Proper drainage is crucial to prevent water-logging, which can lead to rhizome rot.",
    disease: "Turmeric is susceptible to various pests and diseases, including rhizome rot, root knot nematodes, and leaf spot diseases.",
    pest: "Organic pest control methods such as neem oil or botanical pesticides can be employed.",
    soilPh: "pH should ideally be between 6.0 to 7.5.",
    recommendation: "Planting should be done in well-prepared soil with rhizomes placed about 5 to 7 cm (2 to 3 inches) deep and spaced around 20 to 30 cm (8 to 12 inches) apart in rows, with rows spaced around 30 to 45 cm (12 to 18 inches) apart. Weed control methods such as mulching and hand weeding are essential."
  },
  // More items...
];



  const recommendationDiv = document.getElementById("recommendation");
  recommendationDiv.innerHTML = ""; // Clear previous recommendation

  for (let i = 0; i < data.length; i++) {
    if (data[i].cropName.toLowerCase() === cropName.toLowerCase()||
        data[i].soilPh === soilPh ||
        data[i].disease.toLowerCase() === disease.toLowerCase() ||
        data[i].waterAvailability.toLowerCase() === waterAvailability.toLowerCase()) {
      recommendationDiv.innerHTML = `<p><strong>Recommendation:</strong> ${data[i].recommendation}</p>`;
      return; // Stop searching once a match is found
    }
  }

  recommendationDiv.innerHTML = "<p>No recommendation found for the provided parameters.</p>";
});
