/**
 * 
 * @param text Recebe: "01/09/2022 01:21"
 * @returns Thu Sep 01 2022 01:21:00 GMT-0300 (Horário Padrão de Brasília)
 */
export default function stringToDate(text: string): Date {
    const [date, time] = text.split(" ")
    const [day, month, year] = date.split("/").map(Number)
    const [hour, minute] = time.split(":").map(Number)

    return new Date(year, (month - 1), day, hour, minute)
}