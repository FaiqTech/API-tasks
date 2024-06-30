//* Rastgele istifadəçi məlumatlarını gətirmək üçün funksiya

// async function rastgeleKullaniciGetir() {
//   const url = "https://randomuser.me/api/";

//   try {
//     const response = await fetch(url); // URL-dən məlumatları gətir
//     const data = await response.json(); // Gələn cavabı JSON formatına çevir
//     const kullanici = data.results[0]; // İstifadəçi məlumatları

//     const ad = `${kullanici.name.first} ${kullanici.name.last}`; // Ad və soyad
//     const cins = kullanici.gender === "male" ? "Kişi" : "Qadın"; // Cins
//     const ulke = kullanici.location.country; // Ölkə

//     document.getElementById(
//       "sonuc"
//     ).innerText = `Ad: ${ad}, Cins: ${cins}, Ölkə: ${ulke}`; // Məlumatları ekrana yaz
//   } catch (error) {
//     document.getElementById("sonuc").innerText = "Bir xəta baş verdi."; // Xəta olduqda
//   }
// }

//* GitHub istifadəçi məlumatlarını gətirmək üçün funksiya

// async function githubKullaniciGetir() {
//   const kullaniciAdi = document.getElementById("kullaniciAdi").value; // İstifadəçinin daxil etdiyi GitHub istifadəçi adı
//   const url = `https://api.github.com/users/${kullaniciAdi}`;

//   try {
//     const response = await fetch(url); // URL-dən məlumatları gətir
//     const data = await response.json(); // Gələn cavabı JSON formatına çevir

//     if (response.status === 200) {
//       const ad = data.name || "Ad məlum deyil"; // Ad məlumatı
//       const takipci = data.followers; // İzləyici sayı
//       const repolar = data.public_repos; // İctimai repo sayı

//       document.getElementById(
//         "sonuc"
//       ).innerText = `Ad: ${ad}, İzləyici: ${takipci}, Repo: ${repolar}`; // Məlumatları ekrana yaz
//     } else {
//       document.getElementById("sonuc").innerText = "İstifadəçi tapılmadı."; // İstifadəçi tapılmazsa
//     }
//   } catch (error) {
//     document.getElementById("sonuc").innerText = "Bir xəta baş verdi."; // Xəta olduqda
//   }
// }

//* Kitapları axtarmaq üçün funksiya
// "Harry Potter";
// "The Great Gatsby";
// "1984";
// "Moby Dick";
// "War and Peace";
// "Pride and Prejudice";
// "The Catcher in the Rye";
// "To Kill a Mockingbird";

// async function kitapAra() {
//   const kitapAdi = document.getElementById("kitapAdi").value; // İstifadəçinin daxil etdiyi kitap adı
//   const url = `https://www.googleapis.com/books/v1/volumes?q=${kitapAdi}`;

//   try {
//     const response = await fetch(url); // URL-dən məlumatları gətir
//     const data = await response.json(); // Gələn cavabı JSON formatına çevir

//     if (data.totalItems > 0) {
//       const kitaplar = data.items; // Kitap məlumatları
//       let sonucHtml = "";

//       kitaplar.forEach((kitap) => {
//         const baslik = kitap.volumeInfo.title; // Kitap başlığı
//         const yazar = kitap.volumeInfo.authors
//           ? kitap.volumeInfo.authors.join(", ")
//           : "Yazar məlum deyil"; // Kitap yazarı
//         const aciklama = kitap.volumeInfo.description || "Açıqlama yoxdur"; // Kitap açıklaması

//         sonucHtml += `<p><strong>${baslik}</strong><br>Yazar: ${yazar}<br>Açıqlama: ${aciklama}</p><hr>`;
//       });

//       document.getElementById("sonuc").innerHTML = sonucHtml; // Məlumatları ekrana yaz
//     } else {
//       document.getElementById("sonuc").innerText = "Kitap tapılmadı."; // Kitap tapılmazsa
//     }
//   } catch (error) {
//     document.getElementById("sonuc").innerText = "Bir xəta baş verdi."; // Xəta olduqda
//   }
// }

//* Kripto para məlumatlarını gətirmək üçün funksiya

// async function kriptoBilgiGetir() {
//   const kriptoAdi = document.getElementById("kriptoAdi").value.toLowerCase(); // İstifadəçinin daxil etdiyi kripto para adı
//   const url = `https://api.coingecko.com/api/v3/simple/price?ids=${kriptoAdi}&vs_currencies=usd`;

//   try {
//     const response = await fetch(url); // URL-dən məlumatları gətir
//     const data = await response.json(); // Gələn cavabı JSON formatına çevir

//     if (data[kriptoAdi]) {
//       const fiyat = data[kriptoAdi].usd; // Kripto para fiyatı
//       document.getElementById(
//         "sonuc"
//       ).innerText = `${kriptoAdi.toUpperCase()}: $${fiyat}`; // Məlumatları ekrana yaz
//     } else {
//       document.getElementById("sonuc").innerText = "Kripto para tapılmadı."; // Kripto para tapılmazsa
//     }
//   } catch (error) {
//     document.getElementById("sonuc").innerText = "Bir xəta baş verdi."; // Xəta olduqda
//   }
// }

//* Ülke məlumatlarını gətirmək üçün funksiya

// async function ulkeBilgiGetir() {
//   const ulkeAdi = document.getElementById("ulkeAdi").value; // İstifadəçinin daxil etdiyi ülke adı
//   const url = `https://restcountries.com/v3.1/name/${ulkeAdi}`;

//   try {
//     const response = await fetch(url); // URL-dən məlumatları gətir
//     const data = await response.json(); // Gələn cavabı JSON formatına çevir

//     if (data.status !== 404) {
//       const ulke = data[0]; // İlk ölkə məlumatları
//       const ad = ulke.name.common; // Ülke adı
//       const nufus = ulke.population; // Ülke nufusu
//       const bayrak = ulke.flags.png; // Ülke bayrağı URL

//       document.getElementById("sonuc").innerHTML = `
//                 <p>Ad: ${ad}</p>
//                 <p>Nüfus: ${nufus}</p>
//                 <img src="${bayrak}" alt="${ad} bayrağı" style="width:100px;">
//             `; // Məlumatları ekrana yaz
//     } else {
//       document.getElementById("sonuc").innerText = "Ülke tapılmadı."; // Ülke tapılmazsa
//     }
//   } catch (error) {
//     document.getElementById("sonuc").innerText = "Bir xəta baş verdi."; // Xəta olduqda
//   }
// }

//* Film məlumatlarını gətirmək üçün funksiya

// async function filmBilgiGetir() {
//   const filmAdi = document.getElementById("filmAdi").value; // İstifadəçinin daxil etdiyi film adı
//   const apiKey = "YOUR_API_KEY"; // OMDb API açarı
//   const url = `http://www.omdbapi.com/?t=${filmAdi}&apikey=${apiKey}`;

//   try {
//     const response = await fetch(url); // URL-dən məlumatları gətir
//     const data = await response.json(); // Gələn cavabı JSON formatına çevir

//     if (data.Response === "True") {
//       const ad = data.Title; // Film adı
//       const yil = data.Year; // Film ili
//       const janr = data.Genre; // Film janrı
//       const direktor = data.Director; // Film direktoru
//       const aciklama = data.Plot; // Film açıqlaması

//       document.getElementById("sonuc").innerHTML = `
//                 <p><strong>Ad:</strong> ${ad}</p>
//                 <p><strong>İl:</strong> ${yil}</p>
//                 <p><strong>Janr:</strong> ${janr}</p>
//                 <p><strong>Direktor:</strong> ${direktor}</p>
//                 <p><strong>Açıqlama:</strong> ${aciklama}</p>
//             `; // Məlumatları ekrana yaz
//     } else {
//       document.getElementById("sonuc").innerText = "Film tapılmadı."; // Film tapılmazsa
//     }
//   } catch (error) {
//     document.getElementById("sonuc").innerText = "Bir xəta baş verdi."; // Xəta olduqda
//   }
// }

//* Hava keyfiyyəti məlumatlarını gətirmək üçün funksiya

// async function havaKeyfiyyetiGetir() {
//   const ulke = document.getElementById("ulke").value; // İstifadəçinin daxil etdiyi ölkə adı
//   const sehir = document.getElementById("sehir").value; // İstifadəçinin daxil etdiyi şəhər adı
//   const apiKey = "YOUR_API_KEY"; // AirVisual API açarı
//   const url = `http://api.airvisual.com/v2/city?city=${sehir}&state=${sehir}&country=${ulke}&key=${apiKey}`;

//   try {
//     const response = await fetch(url); // URL-dən məlumatları gətir
//     const data = await response.json(); // Gələn cavabı JSON formatına çevir

//     if (data.status === "success") {
//       const havaKeyfiyyeti = data.data.current.pollution.aqius; // Hava keyfiyyəti indeksi
//       document.getElementById(
//         "sonuc"
//       ).innerText = `Hava Keyfiyyəti İndeksi: ${havaKeyfiyyeti}`; // Məlumatları ekrana yaz
//     } else {
//       document.getElementById("sonuc").innerText = "Məlumat tapılmadı."; // Məlumat tapılmazsa
//     }
//   } catch (error) {
//     document.getElementById("sonuc").innerText = "Bir xəta baş verdi."; // Xəta olduqda
//   }
// }

//* Restoran məlumatlarını gətirmək üçün funksiya

// async function restoranlariGetir() {
//   const sehir = document.getElementById("sehir").value; // İstifadəçinin daxil etdiyi şəhər adı
//   const apiKey = "YOUR_API_KEY"; // Yelp API açarı
//   const url = `https://api.yelp.com/v3/businesses/search?location=${sehir}&categories=restaurants`;

//   try {
//     const response = await fetch(url, {
//       headers: {
//         Authorization: `Bearer ${apiKey}`,
//       },
//     }); // URL-dən məlumatları gətir
//     const data = await response.json(); // Gələn cavabı JSON formatına çevir

//     if (data.businesses && data.businesses.length > 0) {
//       const restoranlar = data.businesses; // Restoran məlumatları
//       let sonucHtml = "";

//       restoranlar.forEach((restoran) => {
//         const ad = restoran.name; // Restoran adı
//         const adres = restoran.location.address1; // Restoran adresi
//         const puan = restoran.rating; // Restoran puanı

//         sonucHtml += `<p><strong>${ad}</strong><br>Adres: ${adres}<br>Puan: ${puan}</p><hr>`;
//       });

//       document.getElementById("sonuc").innerHTML = sonucHtml; // Məlumatları ekrana yaz
//     } else {
//       document.getElementById("sonuc").innerText = "Restoran tapılmadı."; // Restoran tapılmazsa
//     }
//   } catch (error) {
//     document.getElementById("sonuc").innerText = "Bir xəta baş verdi."; // Xəta olduqda
//   }
// }

// const response = await fetch(
//   "https://api.yelp.com/v3/businesses/search?location=YOUR_CITY&categories=restaurants",
//   {
//     headers: {
//       Authorization: `Bearer YOUR_API_KEY`,
//     },
//   }
// );

//* Valyuta məzənnələrini gətirmək üçün funksiya

// async function valyutaMezennesiGetir() {
//   const valyuta = document.getElementById("valyuta").value.toUpperCase(); // İstifadəçinin daxil etdiyi valyuta kodu
//   const apiKey = "YOUR_API_KEY"; // ExchangeRate-API açarı
//   const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${valyuta}`;

//   try {
//     const response = await fetch(url); // URL-dən məlumatları gətir
//     const data = await response.json(); // Gələn cavabı JSON formatına çevir

//     if (data.result === "success") {
//       const rates = data.conversion_rates; // Məzənnələr
//       let sonucHtml = `<p><strong>${valyuta} Məzənnələri:</strong></p>`;

//       for (const [key, value] of Object.entries(rates)) {
//         sonucHtml += `<p>${key}: ${value}</p>`;
//       }

//       document.getElementById("sonuc").innerHTML = sonucHtml; // Məlumatları ekrana yaz
//     } else {
//       document.getElementById("sonuc").innerText = "Məzənnə tapılmadı."; // Məzənnə tapılmazsa
//     }
//   } catch (error) {
//     document.getElementById("sonuc").innerText = "Bir xəta baş verdi."; // Xəta olduqda
//   }
// }

//*SONPlaceholder API-dən istifadəçi məlumatlarını çəkib ekranda göstərən bir proqram yazacağıq.

// async function istifadeciGetir() {
//   const url = "https://jsonplaceholder.typicode.com/users";

//   try {
//     const response = await fetch(url); // URL-dən məlumatları gətir
//     const data = await response.json(); // Gələn cavabı JSON formatına çevir

//     let sonucHtml = "<ul>";
//     data.forEach((istifadeci) => {
//       sonucHtml += `<li>Ad: ${istifadeci.name}, Email: ${istifadeci.email}, Şəhər: ${istifadeci.address.city}</li>`;
//     });
//     sonucHtml += "</ul>";

//     document.getElementById("sonuc").innerHTML = sonucHtml; // Məlumatları ekrana yaz
//   } catch (error) {
//     document.getElementById("sonuc").innerText = "Bir xəta baş verdi."; // Xəta olduqda
//   }
// }

//*Ölkə məlumatlarını API-dən əldə etmək və göstərmək
//"Azerbaijan", "Turkey", "France"

// async function olkeGetir() {
//   const olkeAdi = document.getElementById("olkeAdi").value; // İstifadəçinin daxil etdiyi ölkə adı
//   const url = `https://restcountries.com/v3.1/name/${olkeAdi}`;

//   try {
//     const response = await fetch(url); // URL-dən məlumatları gətir
//     const data = await response.json(); // Gələn cavabı JSON formatına çevir

//     if (response.status === 200 && data.length > 0) {
//       const olke = data[0];
//       const ad = olke.name.common; // Ölkə adı
//       const paytaxt = olke.capital ? olke.capital[0] : "Paytaxt məlum deyil"; // Paytaxt
//       const əhali = olke.population; // Əhali
//       const bayraq = olke.flags.svg; // Bayraq şəkli

//       document.getElementById("sonuc").innerHTML = `
//           <p><strong>Ad:</strong> ${ad}</p>
//           <p><strong>Paytaxt:</strong> ${paytaxt}</p>
//           <p><strong>Əhali:</strong> ${əhali}</p>
//           <p><strong>Bayraq:</strong><br><img src="${bayraq}" alt="Bayraq" width="100"></p>
//         `; // Məlumatları ekrana yaz
//     } else {
//       document.getElementById("sonuc").innerText = "Ölkə tapılmadı."; // Ölkə tapılmazsa
//     }
//   } catch (error) {
//     document.getElementById("sonuc").innerText = "Bir xəta baş verdi."; // Xəta olduqda
//   }
// }

//*GET
//!GET sorğusunda məlumatlar URL query string-ləri vasitəsilə göndərilir,
//!buna görə də headers və body hissələri adətən istifadə edilmir.
//!GET sorğusunda xüsusi header-lərə ehtiyac varsa (məsələn, autentifikasiya tokenləri və ya
//!digər xüsusi header-lər), onları sorğuya əlavə edə bilərsiniz:
//*https://api.newtimes.az/api/dashboard/tags/index?page=1&limit=10

// async function getTags(page = 1, limit = 10) {
//   const BASE_URL = `https://api.newtimes.az/api/dashboard/tags/index?page=${page}&limit=${limit}`;
//   try {
//     const response = await fetch(BASE_URL, {
//       method: "GET",
//     });

//     if (!response.ok) {
//       throw new Error("��əbəkə sorğusu uğursuz oldu.");
//     }

//     const responseData = await response.json();
//     console.log("Cavab məlumatı:", responseData); // Serverdən gələn cavab məlumatlarını konsolda göstəririk
//   } catch (error) {
//     console.error("Xəta baş verdi:", error); // Xəta baş verərsə konsolda göstəririk
//   }
//   return responseData;
// }

// getTags();

//*POST
//!PUT və POST sorğularında məlumatlar body hissəsində göndərilir və JSON formatında olmalıdırsa,
//! Content-Type headeri və JSON.stringify metodundan istifadə olunur.
//*https://api.newtimes.az/api/dashboard/tags/store

// async function createTag(name) {
//   const BASE_URL = "https://api.newtimes.az/api/dashboard/tags/store";

//   const data = {
//     Name: name,
//   };

//   try {
//     const response = await fetch(BASE_URL, {
//       method: "POST", // Metod POST olaraq təyin edilir
//       headers: {
//         "Content-Type": "application/json", // Headerdə JSON formatını göstəririk
//       },
//       body: JSON.stringify(data), // Göndərilən məlumatları JSON formatında stringə çeviririk
//     });

//     if (!response.ok) {
//       throw new Error("Şəbəkə sorğusu uğursuz oldu.");
//     }

//     const responseData = await response.json();
//     console.log("Cavab məlumatı:", responseData); // Serverdən gələn cavab məlumatlarını konsolda göstəririk
//   } catch (error) {
//     console.error("Xəta baş verdi:", error); // Xəta baş verərsə konsolda göstəririk
//   }
// }
// // Bu funksiyanı istifadə edərək tag əlavə edə bilərsiniz
// const name = "Yeni Tag Adı";
// createTag(name);

//*DELETE
//!DELETE sorğusunda headers və body hissələrinə ehtiyac yoxdur.Əsas URL və metod kifayətdir:
//*name: "TTT"
//*https://api.newtimes.az/api/dashboard/tags/delete/51

// async function deleteTag(tagId) {
//   const BASE_URL = `https://api.newtimes.az/api/dashboard/tags/delete/${tagId}`;

//   try {
//     const response = await fetch(BASE_URL, {
//       method: "DELETE", // Metod DELETE olaraq təyin edilir
//     });

//     if (!response.ok) {
//       throw new Error("Şəbəkə sorğusu uğursuz oldu.");
//     }

//     const responseData = await response.json();
//     console.log("Cavab məlumatı:", responseData); // Serverdən gələn cavab məlumatlarını konsolda göstəririk
//   } catch (error) {
//     console.error("Xəta baş verdi:", error); // Xəta baş verərsə konsolda göstəririk
//   }
// }

// // Bu funksiyanı istifadə edərək tag silə bilərsiniz
// const tagId = 51; // Bu dəyəri seçdiyiniz tag id-si ilə əvəz edin
// Funksiyanı çağırırıq və silinəcək tagın ID-sini göndəririk
// deleteTag(tagId);

//*PUT
//!PUT və POST sorğularında məlumatlar body hissəsində göndərilir və JSON formatında olmalıdırsa,
//! Content-Type headeri və JSON.stringify metodundan istifadə olunur.
//*https://api.newtimes.az/api/dashboard/tags/update/51
//*Name göndərmək lazımdır
//*51in yerində isə seçdiyiniz tagin idsi olmalıdı

// async function updateTag(tagId, name) {
//   const BASE_URL = `https://api.newtimes.az/api/dashboard/tags/update/${tagId}`;

//   const data = {
//     Name: name,   // Göndərmək istədiyiniz məlumatı JSON obyektində saxlayırıq
//   };

//   try {
//     const response = await fetch(BASE_URL, {
//       method: "PUT", // Metod PUT olaraq təyin edilir
//       headers: {
//         "Content-Type": "application/json",  // Məzmun növünü JSON olaraq təyin edirik
//       },
//       body: JSON.stringify(data), // Göndərilən məlumatları JSON formatında stringə çeviririk
//     });

//     if (!response.ok) {
//       throw new Error("Şəbəkə sorğusu uğursuz oldu.");
//     }

//     const responseData = await response.json();
//     console.log("Cavab məlumatı:", responseData); // Serverdən gələn cavab məlumatlarını konsolda göstəririk
//   } catch (error) {
//     console.error("Xəta baş verdi:", error); // Xəta baş verərsə konsolda göstəririk
//   }
// }
// // Bu funksiyanı istifadə edərək tag yeniləyə bilərsiniz
// const tagId = XX;
// const name = "Yeni Tag Adı";

// Funksiyanı çağırırıq və yenilənəcək tagın ID-sini və yeni adını göndəririk
// updateTag(tagId, name);
