import { useQuery } from "@tanstack/react-query";
import { RadioStation } from "@/types/radio";

const fetchRadioStations = async (country: string): Promise<RadioStation[]> => {
  try {
    const response = await fetch(
      `https://de1.api.radio-browser.info/json/stations/bycountry/${encodeURIComponent(country)}`,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "TanzanianRadioPlayer/1.0",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch radio stations: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching radio stations from ${country}:`, error);
    throw error;
  }
};

export const useRadioStations = (country: string) => {
  return useQuery<RadioStation[]>({
    queryKey: ["radio-stations", country],
    queryFn: () => fetchRadioStations(country),
    retry: 3,
    staleTime: 5 * 60 * 1000, // Dakika 5
  });
};