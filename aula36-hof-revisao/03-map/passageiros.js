const passageiros = ['emily','luiz','luciano','carla','laura'];

const voucher = passageiros.map((p,contador)=> ` voucher nº ${contador+1}, passageiro: ${p}`);

console.log(voucher);