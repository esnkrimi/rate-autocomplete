# EsnLeafletMap

#ANGULAR 

Cryptocurrency and coins live price using autocomplete .
I made loading bar from 0 to 100

(Doesnt contain any library sucha s material progress or other)

----------------------------DEMO

https://stackblitz.com/edit/esn-rate-autocomplete

https://esn-rate-autocomplete.stackblitz.io

https://www.npmjs.com/package/esn-rates-autocomplete


----------------------------INSTALLATION

        npm i esn-rates-autocomplete --force

        and in app.module

        import {EsnRatesAutocompleteModule } from 'esn-rates-autocomplete'

----------------------------NOTE

Firstly,You must install bootstraap 

----------------------------USAGE

----------------HTML FILE

        <esn-rates-autocomplete [data]="data" >
        </esn-rates-autocomplete>

----------------TS FILE
       // BTC / USD 

        data={
            src:'btc',
            dest:'usd',
            bgcolor:'red',
            baseUrl:'https://www.burjcrown.com'
        }