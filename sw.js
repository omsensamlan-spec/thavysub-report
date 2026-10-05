// Service worker ແບບງ່າຍ: ບໍ່ເກັບ cache (ລະບົບຕ້ອງໃຊ້ອິນເຕີເນັດຢູ່ແລ້ວ) ໃຊ້ເພື່ອໃຫ້ຕິດຕັ້ງເປັນແອັບໄດ້
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
