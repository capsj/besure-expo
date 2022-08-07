import {StatusBar, View} from 'react-native';
import { TailwindProvider } from "tailwindcss-react-native";
import QuoteScreen from "./src/views/QuoteScreen";
import React from "react";

export default function App() {
  return (
      <TailwindProvider>
        <StatusBar backgroundColor='#23017e'/>
          {/*<View style={{ backgroundColor: '#23017e' }} />*/}
        <QuoteScreen/>
      </TailwindProvider>
  );
}
