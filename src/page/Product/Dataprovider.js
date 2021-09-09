import React, { createContext,useState } from 'react';

export const DataContext = createContext();

export const Dataprovider = (props) => {
    const [products, setProducts] = useState([
        {
            "_id": "1",
    "title": "Wacth Product 01",
    "images": [
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
        ],
    "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
    "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    "colors": ["red", "black", "teal"],
    "sizes": ["XL", "L", "M", "XM", "LX"],
    "price": 101.68
},
{
    "_id": "2",
    "title": "Wacth Product 02",
    "images": [
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
        ],
    "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
    "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    "colors": ["red", "black", "teal"],
    "sizes": ["XL", "L", "M", "XM", "LX"],
    "price": 102.99
},
{
    "_id": "3",
    "title": "Wacth Product 03",
    "images": [
        "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2e%2F1d%2F2e1d8ce9c5c3620cf7011b103fdd52c2779c46f4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F23%2Fe7%2F23e7a92675cc21028d8a4f7c846516ff0366c74e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_bomberjackets%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
        ],
    "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
    "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    "colors": ["red", "black", "teal"],
    "sizes": ["XL", "L", "M", "XM", "LX"],
    "price": 103.91
},
{
    "_id": "4",
    "title": "Wacth Product 04",
    "images": [
        "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F23%2Fe7%2F23e7a92675cc21028d8a4f7c846516ff0366c74e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_bomberjackets%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2e%2F1d%2F2e1d8ce9c5c3620cf7011b103fdd52c2779c46f4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
        ],
    "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
    "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    "colors": ["red", "black", "teal"],
    "sizes": ["XL", "L", "M", "XM", "LX"],
    "price": 104.15
},
{
    "_id": "5",
    "title": "Wacth Product 05",
    "images": [
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
        ],
    "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
    "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    "colors": ["red", "black", "teal"],
    "sizes": ["XL", "L", "M", "XM", "LX"],
    "price": 105.45
},
{
    "_id": "6",
    "title": "Wacth Product 06",
    "images": [
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
        ],
    "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
    "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    "colors": ["red", "black", "teal"],
    "sizes": ["XL", "L", "M", "XM", "LX"],
    "price": 106.66
        },
        {
            "_id": "7",
            "title": "Wacth Product 07",
            "images": [
                "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
                "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F23%2Fe7%2F23e7a92675cc21028d8a4f7c846516ff0366c74e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_bomberjackets%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2e%2F1d%2F2e1d8ce9c5c3620cf7011b103fdd52c2779c46f4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 94.78
        },
        {
            "_id": "8",
    "title": "Wacth Product 08",
    "images": [
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
        ],
    "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
    "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    "colors": ["red", "black", "teal"],
    "sizes": ["XL", "L", "M", "XM", "LX"],
    "price": 101.68
},])
    return (
        <DataContext.Provider value={[products, setProducts]}>
            {props.children}
        </DataContext.Provider>
        
        )
}
