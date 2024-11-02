export default function calcDate() {
  const currentDate = new Date();
  const openingDate = new Date(2024, 9, 20, 0, 0, 0);

  const totalMilliseconds = openingDate.getTime() - currentDate.getTime();

  const totalSeconds = Math.abs(totalMilliseconds / 1000);

  const seconds = Math.floor(totalSeconds % 60);
  const totalMinutes = Math.floor(totalSeconds / 60);

  const minutes = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);

  const hours = totalHours % 24;
  const totalDays = Math.floor(totalHours / 24);

  const years = Math.floor(totalDays / 365); // Aproximando 365 dias para um ano
  const remainingDaysAfterYears = totalDays % 365; // Dias restantes após calcular os anos

  const months = Math.floor(remainingDaysAfterYears / 30); // Aproximando 30 dias para um mês
  const days = remainingDaysAfterYears % 30; // Dias restantes após calcular os meses

  const remainingTime = {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
  };

  return remainingTime;
}
