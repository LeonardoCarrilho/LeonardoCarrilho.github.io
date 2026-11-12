import {test,expect} from '@playwright/test';
for(const width of [1440,1024,820,768,390,320]){
 test(`portfolio content and language at ${width}`,async({page})=>{
  await page.setViewportSize({width,height:900});await page.emulateMedia({reducedMotion:'reduce'});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('./');await page.evaluate(()=>document.fonts.ready);
  await expect(page.locator('#projects article')).toHaveCount(7);
  await expect(page.locator('html')).toHaveAttribute('data-moments-ready','1');
  for(const img of await page.locator('img').all()){await img.scrollIntoViewIfNeeded();await img.evaluate(image=>image.decode());}
  await page.evaluate(()=>scrollTo(0,0));
  if(width===1440) await page.screenshot({path:".taste-skill/preview.jpg",type:"jpeg",quality:88});
  await page.screenshot({path:`.taste-skill/after-${width}.png`,fullPage:true});
  await page.getByRole('button',{name:'EN',exact:true}).click();
  await expect(page.locator('html')).toHaveAttribute('lang','en');
  await expect(page.locator('h1')).toContainText('Full stack');
  if(width===390)await page.screenshot({path:'.taste-skill/english-390.png',fullPage:true});
  await page.getByRole('button',{name:'PT',exact:true}).click();
  await expect(page.locator('html')).toHaveAttribute('lang','pt-BR');
  await expect(page.locator('.p-contact-email')).toHaveAttribute('href',/^mailto:(?!.*\.example)/);
  const overflow=await page.evaluate(()=>[...document.querySelectorAll("body *")].filter(el=>{const r=el.getBoundingClientRect();return r.right>innerWidth+1 && r.width>0}).map(el=>({tag:el.tagName,cls:el.className,width:el.getBoundingClientRect().width,text:el.textContent.slice(0,60)}))); expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),JSON.stringify(overflow)).toBe(true);expect(errors).toEqual([]);
 });
}

test('keyboard focus stays visible through projects and contact',async({page})=>{
 await page.setViewportSize({width:1440,height:900});await page.goto('./');
 await page.evaluate(()=>document.fonts.ready);
 for(let index=0;index<32;index++){
  await page.keyboard.press('Tab');
  const focus=await page.evaluate(()=>{const element=document.activeElement;const rect=element.getBoundingClientRect();const style=getComputedStyle(element);return {tag:element.tagName,outline:style.outlineStyle,visible:rect.bottom>0&&rect.top<innerHeight&&rect.right>0&&rect.left<innerWidth};});
  if(focus.tag==='BODY')break;
  expect(focus.visible).toBe(true);expect(focus.outline).not.toBe('none');
 }
});
