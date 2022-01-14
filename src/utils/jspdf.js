import jsPDF from 'jspdf'

function generatePDF(resume) {
  let { name, label, email, phone, website, summary } = resume.basics

  // Default export is a4 paper, portrait, using millimeters for units
  const MARGIN = 20
  var doc = new jsPDF('p', 'pt', 'a4')

  let cursorY = MARGIN
  const newLineY = function (extra = 0) {
    let space = cursorY + 10 + extra
    if (space + MARGIN > doc.internal.pageSize.height) {
      doc.addPage()
      return (cursorY = MARGIN)
    }
    return (cursorY = space)
  }

  // IMAGE
  //
  let aqui = window.document.getElementsByName('meimage')[0]
  if (!aqui) {
    aqui = new Image() // picture
    aqui.src = '/images/me.jpg'
  }

  // doc.circle(doc.internal.pageSize.width-MARGIN-30, MARGIN+30, 30, 'F')
  doc.setFillColor(100, 100, 100)
  doc.rect(doc.internal.pageSize.width - MARGIN - 30, MARGIN + 2, 30, 30, 'F')
  doc.addImage(
    aqui,
    'JPEG',
    doc.internal.pageSize.width - MARGIN - 30 - 2,
    MARGIN,
    30,
    30,
    'monkey'
  )

  // BASICS
  doc
    .setFontSize(22)
    .setTextColor(255, 0, 0)
    .setFont('times')
    .setFontType('italic')
    .text(
      name,
      doc.internal.pageSize.width - MARGIN - 30 - 10,
      MARGIN + 15,
      null,
      null,
      'right'
    )
  doc
    .setTextColor(10, 10, 10)
    .setFontSize(10)
    .text(
      label,
      doc.internal.pageSize.width - MARGIN - 30 - 10,
      MARGIN + 30,
      null,
      null,
      'right'
    )

    .text(email, MARGIN, newLineY())
    .text(phone, MARGIN, newLineY())
    .text(website, MARGIN, newLineY())

  doc.setFontType('italic').text('About', MARGIN, newLineY(10))
  doc
    .line(20, cursorY + 2, doc.internal.pageSize.width - MARGIN, cursorY + 2) // horizontal line
    // .text(summary, MARGIN, 60)
    .text(
      doc.splitTextToSize(summary, doc.internal.pageSize.width - 2 * MARGIN),
      MARGIN,
      newLineY(10)
    )

  // EDUCATION
  newLineY(20)
  doc
    .setFontSize(10)
    .setFont('times')
    .setFontType('italic')
    .text('Education', MARGIN, newLineY())
  doc.line(20, cursorY + 2, doc.internal.pageSize.width - MARGIN, cursorY + 2) // horizontal line
  newLineY()

  // eslint-disable-next-line array-callback-return
  resume.education.map((x) => {
    const { institution, area, startDate, endDate } = x
    doc
      .setFontSize(10)
      .setFont('times')
      .setFontType('bold')
      .text(institution + ' ' + area, MARGIN + 10, newLineY(5))
      .setFontType('italic')
      .text(
        `${startDate} - ${endDate}`,
        doc.internal.pageSize.width - MARGIN,
        cursorY,
        null,
        null,
        'right'
      )
  })

  // SKILLS
  newLineY(10)
  doc.text('Skills', MARGIN, newLineY())
  doc.line(20, cursorY + 2, doc.internal.pageSize.width - MARGIN, cursorY + 2) // horizontal line
  newLineY()

  // eslint-disable-next-line array-callback-return
  resume.skills.map((x) => {
    const { title, description, keywords = [] } = x
    // newLineY()
    doc
      .setFontSize(10)
      .setFont('times')
      .setFontType('bold')
      .text(title, MARGIN + 10, newLineY(5))
      .setFontType('italic')
      .text(`${description}`, MARGIN + 105, cursorY)

    doc.text(
      keywords.join(' | '),
      doc.internal.pageSize.width - MARGIN,
      cursorY,
      null,
      null,
      'right'
    )
  })

  // EXPERIENCE
  newLineY(10)
  doc.setFontType('italic').text('Experience', MARGIN, newLineY())
  doc.line(20, cursorY + 2, doc.internal.pageSize.width - MARGIN, cursorY + 2) // horizontal line
  newLineY()

  // eslint-disable-next-line array-callback-return
  resume.works.map((x) => {
    const {
      company,
      position,
      startDate,
      endDate = 'current',
      highlights,
      stack,
    } = x // website summary

    doc
      .setTextColor(10, 10, 10)
      .setFontSize(10)
      .setFont('times')
      .setFontType('bold')
      .text(company, MARGIN + 10, newLineY(10))
    doc
      .setTextColor(175, 10, 10)
      .setFontType('italic')
      .text(position, MARGIN + 130, cursorY) // newLineY()
    doc
      .setTextColor(10, 10, 10)
      .text(
        `${startDate} - ${endDate}`,
        doc.internal.pageSize.width - MARGIN,
        cursorY,
        null,
        null,
        'right'
      )

    // eslint-disable-next-line array-callback-return
    highlights.map((x) => {
      doc.text(x, MARGIN + 20, newLineY())
    })

    newLineY()
    doc
      .setFontSize(9)
      .setTextColor(100, 100, 100)
      .setFont('times')
      .setFontType('bold')
      .text(
        stack.join(' | '),
        doc.internal.pageSize.width - MARGIN,
        cursorY,
        null,
        null,
        'right'
      )
    newLineY()
  })

  doc.save(`resume-${name}.pdf`)
}

function generateCoverPDF(resume) {
  let { name, cover } = resume.basics
  const MARGIN = 40
  var doc = new jsPDF('p', 'pt', 'letter')

  let cursorY = MARGIN
  const newLineY = function (extra = 0) {
    let space = cursorY + 10 + extra
    if (space + MARGIN > doc.internal.pageSize.height) {
      doc.addPage()
      return (cursorY = MARGIN)
    }
    return (cursorY = space)
  }

  // BASICS
  doc
    .setFontSize(12)
    .setFont('times')
    .setFontType('italic')
    .text(
      doc.splitTextToSize(cover, doc.internal.pageSize.width - 2 * MARGIN),
      MARGIN,
      newLineY(30)
    )
  doc.save(`cover-${name}.pdf`)
}

export { generatePDF, generateCoverPDF }

/*

    // eslint-disable-next-line no-unused-vars
    function addWrappedText({text, textWidth, doc, fontSize = 10, fontType = 'normal', lineSpacing = 10, xPosition = 20, initialYPosition = 20, pageWrapInitialYPosition = 20}) {
        doc.setFontType(fontType);
        doc.setFontSize(fontSize);
        var textLines = doc.splitTextToSize(text, textWidth); // Split the text into lines
        var pageHeight = doc.internal.pageSize.height;        // Get page height, we'll use this for auto-paging. TRANSLATE this line if using units other than `pt`
        cursorY = initialYPosition;
      
        textLines.forEach(lineText => {
          if (cursorY > pageHeight) { // Auto-paging
            doc.addPage();
            cursorY = pageWrapInitialYPosition;
          }
          doc.text(xPosition, cursorY, lineText);
          cursorY += lineSpacing;
        })
    }
    // doc.fromHTML(window.body, 15, 48, { width: 145 });

    // let source = window.document.getElementsByTagName("body")[0];
    // doc.fromHTML(source,  15, 15,{ // y coord
    //    'width': margins.width, // max width of content on PDF
    //     'elementHandlers': specialElementHandlers
    // })

    // doc.autoTable({html:”#my-table”});

    // doc
    // .text(MARGIN, newLineY(10), doc.splitTextToSize(JSON.stringify(x, undefined,2 ), doc.internal.pageSize.width-2*MARGIN));


    resume.work.map(x => {
        // newLineY()
        addWrappedText({
            text: JSON.stringify(x, undefined,2 ), // Put a really long string here
            textWidth: doc.internal.pageSize.width-2*MARGIN,
            doc,
            initialYPosition: newLineY(30)
        }) 
        return undefined
    })


    doc.text(JSON.stringify(resume.skills, undefined,2 ), MARGIN, newLineY() );

    doc.text(JSON.stringify(resume.languages, undefined,2 ), MARGIN, newLineY() );

    doc.text(JSON.stringify(resume.portfolio, undefined,2 ), MARGIN, newLineY() );

    doc.text(JSON.stringify(resume.references, undefined,2 ), MARGIN, newLineY() );


    //var string = doc.output('datauristring');
    //var embed = "<embed width='100%' height='100%' src='" + string + "'/>"
    //var x = window.open();
    //x.document.open();
    //x.document.write(embed);
    //x.document.close();
    
    */
