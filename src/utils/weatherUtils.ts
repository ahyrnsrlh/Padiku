export function formatTemperature(temp: number): string {
  return Math.round(temp).toString();
}

export function formatWindSpeed(speed: number): string {
  return (speed * 3.6).toFixed(1); // Convert m/s to km/h
}

export function formatHumidity(humidity: number): string {
  return Math.round(humidity).toString();
}

export function getWeatherImpact(weather: any): string {
  if (!weather) return '';

  const temp = weather.main.temp;
  const humidity = weather.main.humidity;
  const weatherId = weather.weather[0].id;

  // Temperature impacts
  if (temp > 35) {
    return 'Suhu tinggi dapat menyebabkan stress pada tanaman. Pastikan irigasi mencukupi.';
  }
  if (temp < 15) {
    return 'Suhu rendah dapat menghambat pertumbuhan. Pantau tanaman dengan cermat.';
  }

  // Humidity impacts
  if (humidity > 85) {
    return 'Kelembaban tinggi meningkatkan risiko penyakit jamur. Tingkatkan sirkulasi udara.';
  }
  if (humidity < 40) {
    return 'Kelembaban rendah dapat menyebabkan dehidrasi. Pertahankan kelembaban tanah.';
  }

  // Weather condition impacts
  if (weatherId >= 200 && weatherId < 300) {
    return 'Waspada petir dan angin kencang. Lindungi tanaman jika perlu.';
  }
  if (weatherId >= 500 && weatherId < 600) {
    return 'Hujan baik untuk tanaman, namun waspadai genangan air berlebih.';
  }

  return 'Kondisi cuaca normal untuk pertumbuhan tanaman.';
}