export default function BookList() {
   let pageTitle = "Currently Reading";
   let book1 = "https://images.ctfassets.net/trjuzxu9ir9c/3QwEQ6b73hywWmMgQqTBYi/917d7a69fb5506dd80a240985c689a50/Cassandra_In_Reverse_Cover.png?w=1292&h=1848&q=100";
   let book2 = "https://images.ctfassets.net/trjuzxu9ir9c/7uyNZ6F3AbxdkMYImpL41T/28897ac556bdec408a1b9106f29f4e6e/58.The-club.jpg?w=1838&h=2775&q=100";
   let book3 = "https://images.ctfassets.net/trjuzxu9ir9c/Me5FmtLJ7eWypgh7oouyX/6fa20f8758e0eef2fd3e728d52e1c300/64.OnTheRooftop.jpg?w=1838&h=2775&q=100";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img style={{ width: 250, height: 300}} src={book1} alt="Cassandra in Reverse" />
         <img style={{ width: 250, height: 300}} src={book2} alt="The Club" />
         <img style={{ width: 250, height: 300}} src={book3} alt="On the Rooftop" />
      </div>      
   );
}