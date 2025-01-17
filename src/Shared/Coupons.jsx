import React from 'react';
import Title from '../Components/Title';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../Hooks/useAxiosPublic';

const Coupons = () => {
    const axiosPublic = useAxiosPublic();

    const {data: coupons = []} = useQuery({
        queryKey: ['coupons'],
        queryFn: async()=>{
           const res = await axiosPublic.get('/coupons')
           return res.data

        }
    })
    console.log(coupons);
    return (
        <div className='p-2'>
            <Title heading={"Coupons"}></Title>
            <div className="grid bg-neutral-white my-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2">
                {
                    coupons.map(coupon => (
                        <div className="bg-neutral/30 flex flex-col justify-center items-center border p-2 relative">
                            <p className={`text-4xl absolute -top-5 -left-3 ${coupon.isAvailable? "text-success" : "text-error"}`}>{coupon.isAvailable ? "●": "●"}</p>
                            <p className='font-josefin text-4xl font-extrabold text-accent-orange'>{coupon.discount}% <span className='font-semibold text-2xl'>off</span></p>
                            <p className='text-accent font-semibold tex-lg'><span className='uppercase text-sm text-primary'>use:</span> {coupon.couponCode}</p>
                            <p className='text-xs pt-2'>{coupon.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Coupons;