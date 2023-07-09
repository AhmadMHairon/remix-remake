import Image from "next/image";
import React from "react";

const PageBody = ({
  active,
  pageState,
}: {
  active?: string;
  pageState?: string;
}) => {
  if (pageState === "document") {
    return (
      <div className=" w-full h-full p-8 sm:p-20">
        <Image
          src="/loading.gif"
          className="h-full w-full object-contain object-top relative"
          width={100}
          height={100}
          alt="loading"
        />
        <div className="text-center text-gray-800">
          (This is fake, keep scrolling)
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="border-r border-gray-100 bg-gray-50">
        <div className="p-[5.7px] lg:p-4">
          <div className="flex items-center text-[color:#23BF1F]">
            <Image
              src="/chat.svg"
              alt="Remix Logo"
              className="relative top-[1px] h-[8.5px] w-[8.5px] md:h-[18px] md:w-[18px]"
              height={8.5}
              width={8.5}
            />
            <div className="w-[1px] md:w-1"></div>
            <div className="font-display text-[length:8px] font-extrabold md:text-base">
              Fakebooks
            </div>
          </div>
          <div className="h-2 md:h-7"></div>
          <div className="font-bold text-gray-800">
            <div className="my-[1.4px] py-[1.4px] px-[2.8px] pr-4 text-[length:7px] md:my-1 md:py-1 md:px-2 md:pr-16 md:text-[length:10px] lg:text-[length:14px] undefined">
              Dashboard
            </div>
            <div className="my-[1.4px] py-[1.4px] px-[2.8px] pr-4 text-[length:7px] md:my-1 md:py-1 md:px-2 md:pr-16 md:text-[length:10px] lg:text-[length:14px] undefined">
              Accounts
            </div>
            <div className="my-[1.4px] py-[1.4px] px-[2.8px] pr-4 text-[length:7px] md:my-1 md:py-1 md:px-2 md:pr-16 md:text-[length:10px] lg:text-[length:14px] rounded bg-gray-100 md:rounded-md">
              Sales
            </div>
            <div className="my-[1.4px] py-[1.4px] px-[2.8px] pr-4 text-[length:7px] md:my-1 md:py-1 md:px-2 md:pr-16 md:text-[length:10px] lg:text-[length:14px] undefined">
              Expenses
            </div>
            <div className="my-[1.4px] py-[1.4px] px-[2.8px] pr-4 text-[length:7px] md:my-1 md:py-1 md:px-2 md:pr-16 md:text-[length:10px] lg:text-[length:14px] undefined">
              Reports
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        {pageState === "root.js" ? (
          <div className=" w-full h-full p-12 sm:p-24">
            <Image
              src="/loading.gif"
              className="h-full w-full object-contain object-top relative"
              width={100}
              height={100}
              alt="loading"
            />
          </div>
        ) : (
          <div className="relative h-full p-3 md:p-10">
            <div className="font-display text-[length:10px] font-extrabold text-black md:text-3xl">
              Sales
            </div>
            <div className="h-2 md:h-6"></div>
            {pageState === "sales.js" ? (
              <>
                <div className="flex gap-2 border-b border-gray-100 pb-1 text-[length:5px] font-medium text-gray-400 md:gap-4 md:pb-4 md:text-[length:14px]">
                  <div className="w-1/3 animate-pulse rounded bg-gray-300">
                    &nbsp;
                  </div>
                  <div className="w-1/3 animate-pulse rounded bg-gray-300">
                    &nbsp;
                  </div>
                  <div className="w-1/3 animate-pulse rounded bg-gray-300">
                    &nbsp;
                  </div>
                </div>
                <div className="h-3 md:h-4"></div>
                <div className="h-[6rem]">
                  <div className="h-full w-full p-8">
                    <Image
                      src="/loading.gif"
                      className="h-full w-full object-contain object-top relative"
                      width={100}
                      height={100}
                      alt="loading"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex gap-2 border-b border-gray-100 pb-1 text-[length:5px] font-medium text-gray-400 md:gap-4 md:pb-4 md:text-[length:14px]">
                  <div>Overview</div>
                  <div>Subscriptions</div>
                  <div className="font-bold text-black">Invoices</div>
                  <div>Customers</div>
                  <div>Deposits</div>
                </div>
                <div className="h-3 md:h-4"></div>

                {pageState === "sales/nav.json" ? (
                  <div className="h-[6rem]">
                    <div className="h-full w-full p-8">
                      <Image
                        src="/loading.gif"
                        className="h-full w-full object-contain object-top relative"
                        width={100}
                        height={100}
                        alt="loading"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <div className="flex items-center justify-between gap-1 md:gap-4">
                      <div className="">
                        <div className="text-[length:5px] font-medium uppercase leading-[8.5px] text-gray-400 md:text-[12px] md:leading-[24px]">
                          Overdue
                        </div>
                        <div className="text-[length:6.4px] text-black md:text-[length:18px]">
                          $10,800
                        </div>
                      </div>
                      <div className="flex h-[6px] flex-1 overflow-hidden rounded-full md:h-4">
                        <div className="w-1/3 bg-yellow-brand"></div>
                        <div className="flex-1 bg-green-brand"></div>
                      </div>
                      <div className="text-right">
                        <div className="text-[length:5px] font-medium uppercase leading-[8.5px] text-gray-400 md:text-[12px] md:leading-[24px]">
                          Due Soon
                        </div>
                        <div className="text-[length:6.4px] text-black md:text-[length:18px]">
                          $62,000
                        </div>
                      </div>
                    </div>
                    <div className="h-3 md:h-4"></div>
                    <div className="text-[length:5px] font-medium uppercase leading-[8.5px] text-gray-400 md:text-[12px] md:leading-[24px]">
                      Invoice List
                    </div>
                    <div className="h-[2.8px] md:h-2"></div>
                    <div className="flex rounded border border-gray-100 md:rounded-lg">
                      <div className="w-1/2 border-r border-gray-100">
                        <div className="border-b border-gray-50 py-[4.2px] md:py-3 mx-[5.7px] border-transparent md:mx-4">
                          <div className="flex justify-between text-[length:5px] font-bold leading-[8.5px] md:text-[length:14px] md:leading-6">
                            <div>Santa Monica</div>
                            <div>$10,800</div>
                          </div>
                          <div className="flex justify-between text-[length:4.2px] font-medium leading-[6px] text-gray-400 md:text-[length:12px] md:leading-4">
                            <div>1995</div>
                            <div className="uppercase text-red-brand">
                              Overdue
                            </div>
                          </div>
                        </div>
                        <div className="border-b border-gray-50 py-[4.2px] md:py-3 bg-gray-50 px-[5.7px] md:px-4">
                          <div className="flex justify-between text-[length:5px] font-bold leading-[8.5px] md:text-[length:14px] md:leading-6">
                            <div>Stankonia</div>
                            <div>$8,000</div>
                          </div>
                          <div className="flex justify-between text-[length:4.2px] font-medium leading-[6px] text-gray-400 md:text-[length:12px] md:leading-4">
                            <div>2000</div>
                            <div className="uppercase ">Due Today</div>
                          </div>
                        </div>
                        <div className="border-b border-gray-50 py-[4.2px] md:py-3 mx-[5.7px] border-transparent md:mx-4">
                          <div className="flex justify-between text-[length:5px] font-bold leading-[8.5px] md:text-[length:14px] md:leading-6">
                            <div>Ocean Avenue</div>
                            <div>$9,500</div>
                          </div>
                          <div className="flex justify-between text-[length:4.2px] font-medium leading-[6px] text-gray-400 md:text-[length:12px] md:leading-4">
                            <div>2003</div>
                            <div className="uppercase text-green-brand">
                              Paid
                            </div>
                          </div>
                        </div>
                        <div className="border-b border-gray-50 py-[4.2px] md:py-3 mx-[5.7px] border-transparent md:mx-4">
                          <div className="flex justify-between text-[length:5px] font-bold leading-[8.5px] md:text-[length:14px] md:leading-6">
                            <div>Tubthumper</div>
                            <div>$14,000</div>
                          </div>
                          <div className="flex justify-between text-[length:4.2px] font-medium leading-[6px] text-gray-400 md:text-[length:12px] md:leading-4">
                            <div>1997</div>
                            <div className="uppercase ">Due in 10 Days</div>
                          </div>
                        </div>
                        <div className="border-b border-gray-50 py-[4.2px] md:py-3 mx-[5.7px] border-transparent md:mx-4">
                          <div className="flex justify-between text-[length:5px] font-bold leading-[8.5px] md:text-[length:14px] md:leading-6">
                            <div>Wide Open Sp...</div>
                            <div>$4,600</div>
                          </div>
                          <div className="flex justify-between text-[length:4.2px] font-medium leading-[6px] text-gray-400 md:text-[length:12px] md:leading-4">
                            <div>1998</div>
                            <div className="uppercase ">Due in 8 Days</div>
                          </div>
                        </div>
                      </div>
                      <div className="w-1/2">
                        {pageState === "invoices.js" ? (
                          <div className="h-full w-full p-10">
                            <Image
                              src="/loading.gif"
                              className="h-full w-full object-contain object-top relative"
                              width={100}
                              height={100}
                              alt="loading"
                            />
                          </div>
                        ) : (
                          <div className="relative p-3 md:p-10">
                            <div className="text-[length:5px] font-bold leading-[8.5px] md:text-[length:14px] md:leading-6">
                              Stankonia
                            </div>
                            <div className="text-[length:11px] font-bold leading-[14px] md:text-[length:32px] md:leading-[40px]">
                              $8,000
                            </div>
                            <div className="text-[length:5px] font-medium uppercase leading-[8.5px] text-gray-400 md:text-[12px] md:leading-[24px]">
                              Due Today • Invoiced 10/31/2000
                            </div>
                            <div className="h-[5.7px] md:h-4"></div>
                            <div className="flex justify-between border-t border-gray-100 py-[5.7px] text-[5px] leading-[9px] md:py-4 md:text-[14px] md:leading-[24px] ">
                              <div>Pro Plan</div>
                              <div>$6,000</div>
                            </div>
                            <div className="flex justify-between border-t border-gray-100 py-[5.7px] text-[5px] leading-[9px] md:py-4 md:text-[14px] md:leading-[24px] ">
                              <div>Custom</div>
                              <div>$2,000</div>
                            </div>
                            <div className="flex justify-between border-t border-gray-100 py-[5.7px] text-[5px] leading-[9px] md:py-4 md:text-[14px] md:leading-[24px] font-bold">
                              <div>Net Total</div>
                              <div>$8,000</div>
                            </div>
                            {active === "invoiceID" && (
                              <div className="absolute inset-0 z-10 flex items-center justify-center rounded bg-opacity-30 ring-2 ring-inset md:rounded-lg md:ring-4 bg-red-brand ring-red-brand">
                                <div className="rounded bg-opacity-95 p-2 font-mono text-sm text-white md:rounded-xl md:text-xl absolute right-2 bottom-2 bg-red-900 sm:static">
                                  import{'("/invoice.js")'}
                                  <br />
                                  fetch{'("/invoice/{id}.json")'}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    {active === "invoice" && (
                      <div className="absolute inset-0 z-10 flex items-center justify-center rounded bg-opacity-30 ring-2 ring-inset md:rounded-lg md:ring-4 -m-2 bg-yellow-brand ring-yellow-brand">
                        <div className="rounded bg-opacity-95 p-2 font-mono text-sm text-white md:rounded-xl md:text-xl bg-yellow-900">
                          import{'("/invoices.js")'}
                          <br />
                          fetch{'("/invoices.json")'}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
            {active === "sales" && (
              <div className="absolute inset-0 z-10 flex items-center justify-center rounded bg-opacity-30 ring-2 ring-inset md:rounded-lg md:ring-4 bg-aqua-brand ring-aqua-brand">
                <div className="rounded bg-opacity-95 p-2 font-mono text-sm text-white md:rounded-xl md:text-xl bg-aqua-900">
                  import{'("/sales.js")'}
                  <br />
                  fetch{'("/sales/nav.json")'}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {active === "root" && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded bg-opacity-30 ring-2 ring-inset md:rounded-lg md:ring-4 bg-blue-brand ring-blue-brand">
          <div className="rounded bg-opacity-95 p-2 font-mono text-sm text-white md:rounded-xl md:text-xl bg-blue-900">
            import{'("/root.js")'}
            <br />
            fetch{'("/user.json")'}
          </div>
        </div>
      )}
    </>
  );
};

export default PageBody;
