//Sipariş bilgilerini Objects içinde saklayınız.
/* Sipariş ID : 101
   Sipariş Tarihi: 31.12.2022
   Ödeme Şekli: Kredi Kartı
   Kargo Adresi: Yahya Kaptan Mah. Kocaeli İzmit
   Satın alınan ürünler:
     Ürün ID:5
     Ürün Başlığı: Iphone 13 Pro
     Ürün url: http://abc.com/iphone-13-pro
     Ürün Fiyatı: 22000
     
     Ürün ID:6
     Ürün Başlığı: Iphone 14 Pro
     Ürün url: http://abc.com/iphone-14-pro
     Ürün Fiyatı: 25000
     
   Sipariş ID : 102
   Sipariş Tarihi: 31.12.2022
   Ödeme Şekli: Kredi Kartı
   Kargo Adresi: Yahya Kaptan Mah. İstanbul Kadıköy
   Satın alınan ürünler:
     Ürün ID:5
     Ürün Başlığı: Iphone 13 Pro
     Ürün url: http://abc.com/iphone-13-pro
     Ürün Fiyatı: 22000*/

     let siparis1={
        "siparis_id":101,
        "Sipariş Tarihi": "31.12.2022",
        "Ödeme Şekli": "KrediKartı",
        "Kargo Adresi":{
            "mahalle": "Yahya Kaptan Mahallesi",
            "ilce": "İzmit",
            "sehir": "Kocaeli",
        },
        "urunler":{
            "5":{
                "urun_basligi": "Iphone 13 pro",
                "urun_url": "http://abc.com/iphone-13-pro",
                "urun_fiyati": 2200,},
            "6":{
                "urun_basligi": "Iphone 14 pro",
                "urun_url": "http://abc.com/iphone-14-pro",
                "urun_fiyati": 2500,
             },   
    },
    }
    
    let siparis2={
        "siparis_id":101,
        "Sipariş Tarihi": "31.12.2022",
        "Ödeme Şekli": "KrediKartı",
        "Kargo Adresi":{
            "mahalle": "Yahya Kaptan Mahallesi",
            "ilce": "İzmit",
            "sehir": "Kocaeli",
        },
        "urunler":{
            "5":{
                "urun_basligi": "Iphone 13 pro",
                "urun_url": "http://abc.com/iphone-13-pro",
                "urun_fiyati": 2200,},
            },
        }
    
    let siparisler= [
        siparis1,
        siparis2,
    ]
    
    
    
    //Her siparişin ayrı ayrı kdv dahil toplam ödenecek ücretini hesaplayınız. (kdv: %18)
    
    siparis1_odeme= siparis1.urunler[0].urun_fiyati + siparis1.urunler[0].urun_fiyati*1.18 + siparis1.urunler[1].urun_fiyati + siparis1.urunler[1].urun_fiyati*1.18;
    
    siparis2_odeme= siparis2.urunler[0].urun_fiyati + siparis2.urunler[0].urun_fiyati*1.18;