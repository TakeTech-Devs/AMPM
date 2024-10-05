import CryptoJS from 'crypto-js';
import { useState } from 'react';



const APIID = "2797bd1e-81d5-4b7b-ad6e-d2d0e4a6df21";

const APIKEY = "loD0O9sImqm2iciCnFDDLVPgYBm4blfdm2n1voQffUERdOuc2kWbxJQlknBT6F2WC03maoFb9o57L74tSlgQ=="

// const message = '';

var hash = CryptoJS.HmacSHA256('', APIKEY);

var hash64 = CryptoJS.enc.Base64.stringify(hash);

export { APIID, hash64 };
