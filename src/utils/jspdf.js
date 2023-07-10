import jsPDF from 'jspdf';

function generatePDF(resume) {
  try {
    const { name, label, email, phone, website, summary } = resume.basics;
    const MARGIN = 20;
    const doc = new jsPDF('p', 'pt', 'a4');

    let cursorY = MARGIN;

    const newLineY = function (extra = 0) {
      let space = cursorY + 10 + extra;
      if (space + MARGIN > doc.internal.pageSize.height) {
        doc.addPage();
        return (cursorY = MARGIN);
      }
      return (cursorY = space);
    };

    // Load image
    let image = new Image();
    image.src = '/images/me.jpg';

    image.onerror = function () {
      // Handle image loading error
      console.error('Error loading image');
    };

    image.onload = function () {
      // IMAGE
      doc.setFillColor(100, 100, 100);
      doc.rect(doc.internal.pageSize.width - MARGIN - 30, MARGIN + 2, 30, 30, 'F');
      doc.addImage(
        image,
        'JPEG',
        doc.internal.pageSize.width - MARGIN - 30 - 2,
        MARGIN,
        30,
        30,
        'monkey'
      );

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
        );
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
        .text(website, MARGIN, newLineY());

      doc.setFontType('italic').text('About', MARGIN, newLineY(10));
      doc.line(20, cursorY + 2, doc.internal.pageSize.width - MARGIN, cursorY + 2); // horizontal line
      doc.text(
        doc.splitTextToSize(summary, doc.internal.pageSize.width - 2 * MARGIN),
        MARGIN,
        newLineY(10)
      );

      // EDUCATION
      newLineY(20);
      doc
        .setFontSize(10)
        .setFont('times')
        .setFontType('italic')
        .text('Education', MARGIN, newLineY());
      doc.line(20, cursorY + 2, doc.internal.pageSize.width - MARGIN, cursorY + 2); // horizontal line
      newLineY();

      resume.education.forEach((x) => {
        const { institution, area, startDate, endDate } = x;
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
          );
      });

      // SKILLS
      newLineY(10);
      doc.setFontType('italic').text('Skills', MARGIN, newLineY());
      doc.line(20, cursorY + 2, doc.internal.pageSize.width - MARGIN, cursorY + 2);
      newLineY();

      // Extract skills from works
      const workSkills = resume.works.flatMap((work) => work.stack);
      // Extract skills from clients
      const clientSkills = resume.clients.flatMap((client) => client.stack);
      // Combine all skills
      const allSkills = [...workSkills, ...clientSkills];

      doc
        .setFontSize(10)
        .setFont('times')
        .setFontType('bold')
        .text('Technologies:', MARGIN + 10, newLineY(5))
        .setFontType('italic')
        .text(allSkills.join(', '), MARGIN + 105, cursorY);

      
      // EXPERIENCE
      newLineY(10);
      doc.setFontType('italic').text('Clients', MARGIN, newLineY());
      doc.line(20, cursorY + 2, doc.internal.pageSize.width - MARGIN, cursorY + 2); // horizontal line
      newLineY();

      resume.clients.forEach((x) => {
        const { company, position, startDate, endDate = 'current', highlights, stack } = x;

        doc
          .setTextColor(10, 10, 10)
          .setFontSize(10)
          .setFont('times')
          .setFontType('bold')
          .text(company, MARGIN + 10, newLineY(10));
        doc
          .setTextColor(175, 10, 10)
          .setFontType('italic')
          .text(position, MARGIN + 130, cursorY);
        doc
          .setTextColor(10, 10, 10)
          .text(
            `${startDate} - ${endDate}`,
            doc.internal.pageSize.width - MARGIN,
            cursorY,
            null,
            null,
            'right'
          );

        highlights.forEach((highlight) => {
          doc.setTextColor(10, 10, 10);
          doc.text(highlight, MARGIN + 20, newLineY());
        });

        newLineY();
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
          );
        newLineY();
      });

      // Works
      newLineY(10);
      doc.setFontType('italic').text('Works', MARGIN, newLineY());
      doc.line(20, cursorY + 2, doc.internal.pageSize.width - MARGIN, cursorY + 2); // horizontal line
      newLineY();

      resume.works.forEach((x) => {
        const { company, position, startDate, endDate = 'current', highlights, stack } = x;

        doc
          .setTextColor(10, 10, 10)
          .setFontSize(10)
          .setFont('times')
          .setFontType('bold')
          .text(company, MARGIN + 10, newLineY(10));
        doc
          .setTextColor(175, 10, 10)
          .setFontType('italic')
          .text(position, MARGIN + 130, cursorY);
        doc
          .setTextColor(10, 10, 10)
          .text(
            `${startDate} - ${endDate}`,
            doc.internal.pageSize.width - MARGIN,
            cursorY,
            null, null, 'right'
          );

        highlights.forEach((highlight) => {
          doc.text(highlight, MARGIN + 20, newLineY());
        });

        newLineY();
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
          );
        newLineY();
      });

      doc.save(`resume-${name}.pdf`);
    };
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
}

function generateCoverPDF(resume) {
  try {
    const { name, cover } = resume.basics;
    const MARGIN = 40;
    const doc = new jsPDF('p', 'pt', 'letter');

    let cursorY = MARGIN;

    const newLineY = function (extra = 0) {
      let space = cursorY + 10 + extra;
      if (space + MARGIN > doc.internal.pageSize.height) {
        doc.addPage();
        return (cursorY = MARGIN);
      }
      return (cursorY = space);
    };

    // BASICS
    doc
      .setFontSize(12)
      .setFont('times')
      .setFontType('italic')
      .text(
        doc.splitTextToSize(cover, doc.internal.pageSize.width - 2 * MARGIN),
        MARGIN,
        newLineY(30)
      );

    doc.save(`cover-${name}.pdf`);
  } catch (error) {
    console.error('Error generating cover PDF:', error);
  }
}

export { generatePDF, generateCoverPDF };
