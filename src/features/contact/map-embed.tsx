import * as React from 'react'

export function MapEmbed(): React.ReactElement {
  return (
    <div className="w-full h-full bg-surface border border-border rounded-2xl p-1">
      <div className="w-full h-[240px] tablet:h-[460px] border border-border rounded-xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3949.957187494256!2d115.1383523!3d-8.1058419!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd190ded6afc7df%3A0x1182e8e3d9d36dac!2sPURA%20AGUNG%20MENASA!5e0!3m2!1sen!2sid!4v1733291860492!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: '0' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}
